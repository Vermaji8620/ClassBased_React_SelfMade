import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    return (
      <div>
        <div className="card my-5">
          <span
            className="badge pill bg-primary text-dark"
            style={{ fontSize: "1.4rem" }}
          >
            Published on {this.props.publishedAtDate} at
            {this.props.publishedAtTime}
          </span>
          <img src={this.props.imageurl} className="card-img-top" alt="..." />
          <button type="button" className="btn btn-dark position-relative">
            AUTHOR - {this.props.author}
          </button>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>

            <a href={this.props.url} target="blank" className="btn btn-primary">
              CLICK ME
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
