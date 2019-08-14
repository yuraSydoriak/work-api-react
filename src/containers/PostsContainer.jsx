import React, { Component } from "react";
import Posts from "../components/Posts";

const BASE_API_PATH = "https://hn.algolia.com/api/v1";
const SEARCH_PATH = "/search";
const QUERY_PARAM = "query=";

class PostsContainer extends Component {
  state = {
    searchValue: "",
    result: {}
  };

  componentDidMount() {
    const { searchValue } = this.state;
    this.getAPIData(searchValue);
  }

  getAPIData = searchValue => {
    fetch(`${BASE_API_PATH}${SEARCH_PATH}?${QUERY_PARAM}`)
      .then(res => res.json())
      .then(result => this.setResultToState(result))
      .catch(error => error);
  };

  setResultToState = result => this.setState({ result });

  render() {
    const { result } = this.state;
    const { hits = [] } = result;

    console.log(result);
    return <Posts hits={hits} />;
  }
}

export default PostsContainer;
