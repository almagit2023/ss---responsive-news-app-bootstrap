import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NewsCard from './components/NewsCard';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const API_KEY = '0dc674d382ac4618b74868aaeb275c2b';
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [topics] = useState(['Technology', 'Business', 'Sports', 'Health', 'Entertainment', 'Science']);

  // Fetch default news data when the app loads
  useEffect(() => {
    getData('Technology'); // Load initial data with a default topic
  }, []);

  const getData = async (search) => {
    const newsURL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
    try {
      const response = await fetch(newsURL);
      const jsonData = await response.json();
      if (jsonData.articles) {
        const articles = jsonData.articles.slice(0, 11);
        setNewsData(articles);
      } else {
        setNewsData([]); // In case the response has no articles
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setNewsData([]); // Set empty data on error
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getData(searchTerm);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTopicSelect = (topic) => {
    setSearchTerm(topic);
    getData(topic);
  };

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
        <h1>News App</h1>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
      </header>
      <div className="row">
        <div className="col-md-3">
          <Sidebar topics={topics} onTopicSelect={handleTopicSelect} />
        </div>
        <main className="col-md-9 p-3">
          <div className="row">
            {newsData.length > 0 ? (
              newsData.map((article, index) => <NewsCard key={index} article={article} />)
            ) : (
              <p>No news available. Try searching for a topic.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
