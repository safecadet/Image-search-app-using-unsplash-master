import React from "react";
import { connect } from "react-redux";
import { loadMore } from "../actions/imageActions";

const DisplayImages = (props) => {
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.loadMore();
  };

  return (
    <>
      <div className="result-head">
        <p className="search-query">{capitalize(props.query)}</p>
        <p className="result-num">{`${props.total_results} Images has been found`}</p>
      </div>
      <div className="container-fluid img-cont-wrapper m-0 p-0">
        <div className="row justify-content-between">
          {props.images.map((item) => {
            return (
              <div
                className="img-container py-3 col-12 col-sm-6 col-md-4 col-lg-3"
                key={item.id}
              >
                <img
                  src={item.urls.small}
                  alt={
                    item.alt_description === null ? "" : item.alt_description
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <button onClick={handleClick} className="custom-btn load-more-btn">
          Load More
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  images: state.image.images,
  total_results: state.image.total_results,
  query: state.search.query,
});

export default connect(mapStateToProps, { loadMore })(DisplayImages);
