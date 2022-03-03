import { localItems } from './db';
import ListItem from './components/ListItem';
import './styles.css';
import Header from './components/Header';
import AddItem from './components/AddItem';
import Subheader from './components/Subheader';

function App() {
  return (
    <>
      <Header text="Shopping List" />
      <ListItem initialItems={localItems} />
      <Subheader question="What do you want to buy?" />
      <AddItem />
    </>
  );
}

export default App;
