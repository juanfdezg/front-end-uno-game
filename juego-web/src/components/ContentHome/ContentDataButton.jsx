import React, { Component } from "react";
import "./ContentDataButton.css";

class ContentDataButton extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="cont-text">
            <h2>{this.props.heading}</h2>
            <p>
              {this.props.text}
            </p>
            <a href="/home-page">{this.props.button}</a>
          </div>

          <div className="image">
            <img src={this.props.img1} alt="img-content1" />
            <img src={this.props.img2} alt="img-content2" />
          </div>

        </div>
      </>
    );
  }
}

export default ContentDataButton;