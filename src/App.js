import React, { Component } from "react";
import ImageGallery from "./Сomponents/ImageGallery/ImageGallery";
import Searcbar from "./Сomponents/Searchbar/Searchbar";
import Modal from "./Сomponents/Modal/Modal";
import Button from "./Сomponents/Button/Button";
import * as ArticleAPI from "./Servises/services-api";

export default class App extends Component {
  state = {
    articles: [],
    qvery: "",
    page: 0,
    imagSrc: "",
    isOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      const { qvery, page } = this.state;

      ArticleAPI.fearchArticle(qvery, page)
        .then((response) => response.json())
        .then((data) =>
          this.setState((prevState) => ({
            articles: [...prevState.articles, ...data.hits],
          }))
        )
        .catch((error) => console.log("ERROR"));
    }
  }

  fetchAcrticle = (qvery) => {
    this.setState({
      articles: [],
      qvery: qvery,
      page: 1,
    });
  };

  fetchPaginations = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
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
    const { articles, isOpen, imagSrc } = this.state;
    return (
      <div>
        <Searcbar onSubmit={this.fetchAcrticle} />
        <ImageGallery items={articles} onOpen={this.openModal} />
        <Button onPagination={this.fetchPaginations} />
        {isOpen && <Modal src={imagSrc} onClose={this.closeModal} />}
      </div>
    );
  }
}

// 15017086-40d983aabf64e9bce54bf4312
