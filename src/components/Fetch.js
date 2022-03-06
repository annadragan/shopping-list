import { useEffect, useState } from 'react';

export default function Fetch() {
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
        console.log(error);
      }
    }
  }, []);
  return (
    <ul>
      {listItem.map(curry => (
        <li key={curry._id}>{curry.name.en}</li>
      ))}
    </ul>
  );
}
