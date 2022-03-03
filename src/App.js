import { localItems } from './db';
import ListItem from './components/ListItem';
import './styles.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header text="Shopping List" />
      <ListItem initialItems={localItems} />
    </>
  );
}

export default App;
