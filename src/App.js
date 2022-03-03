import { localItems } from './db';
import ListItem from './components/ListItem';
import './styles.css';

function App() {
  return (
    <>
      <h1>Shopping List</h1>
      <ListItem initialItems={localItems} />
    </>
  );
}

export default App;
