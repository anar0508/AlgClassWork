import React from "react";
import { connect } from 'react-redux';
import "./styles.css";
import Header from "./Header";
import Articles from "./Articles";


 class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Articles/>
      </div>
    );
  }
}
export default connect()(App);