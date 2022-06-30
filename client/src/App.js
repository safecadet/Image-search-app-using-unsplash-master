import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import DisplayImages from "./components/DisplayImages";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center justify-content-center">
        <SearchBar />
      </header>
      <main className="main-wrapper">
        {props.display_images && <DisplayImages />}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  display_images: state.image.display_images,
});

export default connect(mapStateToProps, {})(App);
