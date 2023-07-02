import React, { Component } from "react";
import "./ContentData.css";

class ContentData extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="cont-text">
            <h2>{this.props.heading}</h2>
            <p>
              {this.props.text}
            </p>
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

export default ContentData;
