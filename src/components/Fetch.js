import { useEffect, useState } from 'react';
import './Fetch.css';

export default function Fetch({ value, onSearchItem }) {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    loadItems();
    async function loadItems() {
      try {
        const response = await fetch(
          'https://fetch-me.vercel.app/api/shopping/items'
        );
        const data = await response.json();
        setListItem(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <ul role="list" className="Fetch__data__list">
      {listItem
        .filter(curry =>
          curry.name.en.toLowerCase().includes(value.toLowerCase())
        )
        .map(curry => (
          <li
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

  // const clearInput = () => {
  //   setListItem([]);
  //   listItem("");
  // }
}
