import { useEffect, useState } from 'react';
import './Fetch.css';

export default function SearchedShoppingList({ value, onSearchItem }) {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    loadItems();
    async function loadItems() {
      try {
        const response = await fetch(
          'https://fetch-me.vercel.app/api/shopping/items'
        );
        const data = await response.json();
        setListItems(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <ul role="list" className="Fetch__data__list">
      {listItems
        .filter(curry =>
          curry.name.en.toLowerCase().includes(value.toLowerCase())
        )
        .map(curry => (
          <li
            className="Fetch__data_-item"
            key={curry._id}
            onClick={() => {
              onSearchItem(curry);
            }}
          >
            {curry.name.en}
          </li>
        ))}
    </ul>
  );
}
