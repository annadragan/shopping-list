import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Header from './components/Header';
import SearchedShoppingList from './components/SearchedShoppingList';
import ShoppingList from './components/ShoppingList';
import Subheader from './components/Subheader';
import useToggle from './hooks/useToggle';
import './styles.css';

function App() {
  const [articles, setArticles] = useState(loadFromLocal('products') ?? []);
  const [searchValue, setSearchValue] = useState('');
  const [language, setLanguage] = useToggle();

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
    if (articles.find(article => article._id === shoppingItem._id)) {
      alert('The article is already on your list');
      setSearchValue('');
    } else {
      setSearchValue('');
      setArticles([...articles, shoppingItem]);
    }
  }

  return (
    <div className="App__container">
      <Header text="Shopping List" />
      <ShoppingList articles={articles} onDelete={handleOnDelete} />
      <Subheader question="What do you want to buy?" />
      <AddItem onAdd={handleOnAdd} />
      <div className="Search__input--container">
        <label
          htmlFor="new-article"
          aria-labelledby="Search for your article"
        ></label>
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
        />
        <button className="Toggle__button" onClick={setLanguage}>
          {language ? 'Deutsch' : 'English'}
        </button>
      </div>
      {searchValue && (
        <SearchedShoppingList
          value={searchValue}
          onSearchItem={handleOnSearch}
        />
      )}
    </div>
  );
}
export default App;
