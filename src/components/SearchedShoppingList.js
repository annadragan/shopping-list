import { useEffect, useState } from 'react';
import './SearchedShoppingList.css';

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
        .filter(product =>
          product.name.en.toLowerCase().includes(value.toLowerCase())
        )
        .map(product => (
          <li
            className="Fetch__data_-item"
            key={product._id}
            onClick={() => {
              onSearchItem(product);
            }}
          >
            {product.name.en}
          </li>
        ))}
    </ul>
  );
}
