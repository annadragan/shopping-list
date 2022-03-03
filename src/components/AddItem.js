import { useState } from 'react';
import './AddItem.css';

export default function AddItem() {
  const [itemName, setItemName] = useState([]);
  return (
    <section className="Add-item__section">
      <input className="Add__input"></input>
      <button className="Add__Button">Add Item</button>
    </section>
  );
}
