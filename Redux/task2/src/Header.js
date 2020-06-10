import React from "react";
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Articles
        </a>

        <span className="navbar-text">Ваш баланс: {this.props.balance}</span>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      balance: state.balance
  }
}



export default connect(mapStateToProps)(Header);