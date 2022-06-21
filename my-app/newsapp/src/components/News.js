import React, { Component } from "react";
import NewsItems from "./NewsItems.js";
import Spinner from "./Spinner.js";
import Exclamation from "./Exclamation.jpg";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
    };
    document.title = `NewsMonkey-${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  }

  componentDidMount = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1`;
    this.props.changeProgress(10);
    let data = await fetch(url);
    this.props.changeProgress(30);
    let parsedata = await data.json();
    this.props.changeProgress(70);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: true,
    });
    this.props.changeProgress(100);
  };

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}`;
    this.props.changeProgress(10);
    let data = await fetch(url);
    this.props.changeProgress(30);
    let parsedata = await data.json();
    this.props.changeProgress(70);
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      page: this.state.page + 1,
      loading: true,
    });
    this.props.changeProgress(100);
  };

  render() {
    return (
      <div className="my-3 mx-5">
        <div className="text-center" style={{ color: "blue" }}>
          <strong>
            <h1 style={{ padding: "2rem" }}>
              NEWSMONKEY SERVING NEWS - {this.props.category.toUpperCase()}{" "}
            </h1>
          </strong>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Spinner />}
        >
          <div className="row">
            {!this.state.loading && <Spinner />}
            {this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title}
                      publishedAtDate={new Date(
                        element.publishedAt
                      ).toLocaleDateString()}
                      publishedAtTime={new Date(
                        element.publishedAt
                      ).toLocaleTimeString()}
                      description={element.description}
                      author={element.author ? element.author : "ANONYMOUS"}
                      imageurl={
                        element.urlToImage
                          ? element.urlToImage
                          : "<Exclamation />"
                      }
                      url={element.url}
                    ></NewsItems>
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
