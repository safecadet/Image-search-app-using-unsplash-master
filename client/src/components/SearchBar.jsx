import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { getImages } from "../actions/imageActions";

class SearchBar extends Component {
  state = {
    query: "random",
  };

  render() {
    const fetchImages = (e) => {
      e.preventDefault();
      if (this.state.query === "")
        this.setState({ query: "random" }, () => {
          this.props.getImages(this.state.query);
        });
      else this.props.getImages(this.state.query);
    };

    const handleChange = (e) => {
      this.setState({ query: e.target.value });
    };

    return (
      <>
        <form className="form-search d-flex justify-content-between">
          <input
            type="text"
            placeholder="Search for photos..."
            name="searchbar"
            className="search-input px-4"
            onChange={handleChange}
          />
          <button
            onClick={fetchImages}
            className="custom-btn search-btn d-flex align-items-center justify-content-center"
          >
            <FaSearch />
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { getImages })(SearchBar);
