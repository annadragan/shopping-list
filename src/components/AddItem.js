import { useState } from 'react';
import './AddItem.css';

export default function AddItem({ onAdd }) {
  const [itemName, setItemName] = useState('');
  return (
    <section className="Add-item__section">
      <label htmlFor="new-item">######</label>
      <input
        id="new-item"
        onChange={event => setItemName(event.target.value)}
        value={itemName}
        type="text"
        className="Add__input"
      ></input>
      <button className="Add__Button" onClick={() => onAdd(itemName)}>
        Add Item
      </button>
    </section>
  );
}
