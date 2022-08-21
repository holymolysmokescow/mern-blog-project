import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, idx) => (
        <div key={idx} className='p-4 md:w-1/2'>
          <Link to={`/article/${article.name}`}>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <img src={article.thumbnail} className="" alt={article.name}
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
              />

              <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-900 mb-3'>
                  {article.title}
                </h3>
                <p className='leading-relaxed mb-3'>
                  {article.content[0].substring(0, 99)}...
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}


export default Articles;
