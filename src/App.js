import React, { Component } from "react";
import ImageGallery from "./Сomponents/ImageGallery/ImageGallery";
import Searcbar from "./Сomponents/Searchbar/Searchbar";
import Modal from "./Сomponents/Modal/Modal";
import Button from "./Сomponents/Button/Button";
import * as ArticleAPI from "./Servises/services-api";
import Spiner from "./Сomponents/Spiner/Spiner";

export default class App extends Component {
  state = {
    articles: [],
    qvery: "",
    page: null,
    imagSrc: "",
    isOpen: false,
    spiner: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.page !== this.state.page) {
  //     const { qvery, page } = this.state;

  //     ArticleAPI.fearchArticle(qvery, page)
  //       .then((response) => response.json())
  //       .then((data) =>
  //         this.setState((prevState) => ({
  //           spiner: false,
  //           articles: [...prevState.articles, ...data.hits],
  //         }))
  //       )
  //       .catch((error) => console.log("ERROR"));
  //   }
  //   if (prevState.qvery !== this.state.qvery) {
  //     const { qvery } = this.state;

  //     ArticleAPI.fearchArticle(qvery)
  //       .then((response) => response.json())
  //       .then((data) =>
  //         this.setState((prevState) => ({
  //           spiner: false,
  //           articles: [...prevState.articles, ...data.hits],
  //         }))
  //       )
  //       .catch((error) => console.log("ERROR"));
  //   }
  // }

  fetchAcrticle = (qvery) => {
    this.setState({
      articles: [],
      qvery: qvery,
      page: 1,
      spiner: true,
    });

    ArticleAPI.fearchArticle(qvery)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          spiner: false,
          articles: [...data.hits],
        })
      )
      .catch((error) => console.log("ERROR"));
  };

  fetchPaginations = () => {
    const {qvery, page} = this.state;
    this.setState({
      spiner: true,
    });

    ArticleAPI.fearchArticle(qvery, `${page + 1}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState((prevState) => ({
          spiner: false,
          page: prevState.page + 1,
          articles: [...prevState.articles, ...data.hits],
        }))
      )
      .catch((error) => console.log("ERROR"));
  };

  openModal = (e) => {
    this.setState({
      imagSrc: e.target.dataset.src,
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      imagSrc: "",
      isOpen: false,
    });
  };

  render() {
    const { articles, isOpen, imagSrc, spiner } = this.state;
    // this.fetchValueAPI();

    return (
      <div>
        <Searcbar onSubmit={this.fetchAcrticle} />
        <ImageGallery items={articles} onOpen={this.openModal} />
        <Button onPagination={this.fetchPaginations} />
        {isOpen && <Modal src={imagSrc} onClose={this.closeModal} />}
        {spiner && <Spiner />}
      </div>
    );
  }
}

// 15017086-40d983aabf64e9bce54bf4312
