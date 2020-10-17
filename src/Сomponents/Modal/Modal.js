import React, { Component, createRef } from "react";

export default class Modal extends Component {
  bacdropRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.hendleKeyPres);
  }
  componentWillUnmount() {
    window.addEventListener("keydown", this.hendleKeyPres);
  }
  hendleKeyPres = (e) => {
    if (e.code !== "Escape") return;

    this.props.onClose();
  };

  hendleBacdropClose = (e) => {
    const { current } = this.bacdropRef;

    if (current && e.target !== current) return;
    this.props.onClose();
  };

  render() {
    const { src } = this.props;

    return (
      <div
        className="Overlay"
        ref={this.bacdropRef}
        onClick={this.hendleBacdropClose}
      >
        <div className="Modal">
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}
