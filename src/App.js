import { localItems } from './db';
import ListItem from './components/ListItem';
import './styles.css';
import Header from './components/Header';
// import AddItem from './components/AddItem';
import Subheader from './components/Subheader';
import { useState } from 'react';
// import { nanoid } from 'nanoid';

function App() {
  const [articles, setArticles] = useState(localItems);

  function handleOnDelete(articleId) {
    setArticles(articles.filter(article => article._id !== articleId));
  }
  return (
    <>
      <Header text="Shopping List" />
      <ListItem curry={articles} onDelete={handleOnDelete} />
      <Subheader question="What do you want to buy?" />
      {/* <AddItem />*/}
    </>
  );
}

export default App;
