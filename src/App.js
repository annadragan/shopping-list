import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import { localItems } from './db';
import './styles.css';
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';
import Subheader from './components/Subheader';
import Fetch from './components/Fetch';

function App() {
  // const [articles, setArticles] = useState(localItems);
  const [articles, setArticles] = useState(loadFromLocal('products') ?? []);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    saveToLocal('products', articles);
  }, [articles]);

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function handleOnDelete(articleId) {
    setArticles(articles.filter(article => article._id !== articleId));
  }
  function handleOnAdd(articleName) {
    const newArticleName = {
      _id: nanoid(),
      _type: 'shopping.item',
      category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
      name: { en: articleName, de: '' },
    };
    setArticles([...articles, newArticleName]);
  }

  function handleOnSearch(shoppingItem) {
    const newItem = {
      _id: shoppingItem._id,
      _type: shoppingItem._type,
      category: shoppingItem.category,
      name: { en: shoppingItem.name.en, de: '' },
    };
    if (articles.find(article => article._id) === newItem._id) {
      alert('The article is already on your list');
      setSearchValue('');
    } else {
      setSearchValue('');
      setArticles([...articles, newItem]);
    }
  }

  return (
    <div className="App__container">
      <Header text="Shopping List" />
      <ListItem curry={articles} onDelete={handleOnDelete} />
      <Subheader question="What do you want to buy?" />
      <AddItem onAdd={handleOnAdd} />
      <div className="Search__input--container">
        <label htmlFor="new-article"></label>
        <input
          id="new-article"
          className="Search__input--field"
          type="search"
          role="searchbox"
          placeholder="Search for..."
          value={searchValue}
          onChange={event => {
            setSearchValue(event.target.value);
          }}
        ></input>
      </div>
      {searchValue && (
        <Fetch value={searchValue} onSearchItem={handleOnSearch} />
      )}
    </div>
  );
}
export default App;
