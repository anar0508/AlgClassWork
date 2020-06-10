import React from "react";
import Article from "./Article";

import { connect } from 'react-redux';


 class Articles extends React.Component {
  render() {
    const { articlesList } = this.props;
    return (
      <div>
        {articlesList.map(article => (
          <Article key={article.name} article={article} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      articlesList: state.articles
  }
}



export default connect(mapStateToProps)(Articles);