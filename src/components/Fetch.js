import { useEffect, useState } from 'react';

export default function Fetch({ value }) {
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
    <ul>
      {listItem
        .filter(curry =>
          curry.name.en.toLowerCase().includes(value.toLowerCase())
        )
        .map(curry => (
          <li key={curry._id}>{curry.name.en}</li>
        ))}
    </ul>
  );

  // const clearInput = () => {
  //   setListItem([]);
  //   listItem("");
  // }
}
