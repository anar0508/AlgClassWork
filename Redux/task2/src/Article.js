import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { changeBalance } from "./store/actions";

class Article extends React.Component {
  state = {
    payment: 0
  }

  handleChange = (value)=>{
    this.setState({
      payment:value
    })
  }
  render() {
    const { article, balance, balanceChanger } = this.props;
    const { name, description, author, time } = article;
    const {payment} = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">{description}</p>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Ваш баланс</span>
              <span className="input-group-text">{balance}</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={payment || ""}
              onChange={(e) => { this.handleChange(e.target.value) }}
              placeholder="Сумма"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                onClick = {(e) => { balanceChanger(payment) }}
                type="button"
                id="button-addon2"
              >
                Поддержать
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">{time}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    balanceChanger: bindActionCreators(changeBalance, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);