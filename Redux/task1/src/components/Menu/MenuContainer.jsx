import React from "react";
import { bindActionCreators } from "redux";
import Menu from './Menu';
import { connect } from "react-redux";
import { loggingOut, downloading } from "../../store/menu/actions";

function MenuContainer(props) {
  const { token, logOut, downloadCredits } = props;
  return (
    <Menu token={token} logOut={logOut} downloadCredits={downloadCredits}/>
  );
}

const mapStateToProps = (state) => {
    return {
        token: state.login.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: bindActionCreators(loggingOut, dispatch),
        downloadCredits: bindActionCreators(downloading, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)