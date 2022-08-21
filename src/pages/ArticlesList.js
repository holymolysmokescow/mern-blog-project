import React from 'react';
import { Link } from 'react-router-dom';
import articles from './article-content';
import Articles from '../components/Articles';

const ArticlesList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-600">
        Articles List
      </h1>

      <div>
        <Articles articles={articles} />
      </div>

    </>
  );
}


export default ArticlesList;
