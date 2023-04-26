import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './module.css';

const NewsAnalysis = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=yourapikey');
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return (
    <div>
      <h1>News Analysis</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {articles.map((article) => (
            <div key={article.url}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsAnalysis;
