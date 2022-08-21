import React from 'react';
import { useParams } from 'react-router-dom';

import articles from './article-content';

const Article = () => {

  const { name } = useParams();

  const article = articles.find((article) => article.name === name);

  if (!article) return (<h1>This Article doesn't exist</h1>);

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        This article is about { article.title }
      </h1>

      {article.content.map((paragraph, idx) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={idx}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

export default Article;
