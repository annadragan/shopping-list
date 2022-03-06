import { useState } from 'react';
import './AddItem.css';

export default function AddItem({ onAdd }) {
  const [itemName, setItemName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(itemName);
    setItemName('');
  }
  return (
    <form className="Add-item__form" onSubmit={handleSubmit}>
      <label htmlFor="new-item" className="Add-item__label">
        Your article:
      </label>
      <input
        id="new-item"
        onChange={event => setItemName(event.target.value)}
        value={itemName}
        type="text"
        className="Add__input"
      ></input>
      <button className="Add__Button" onClick={() => onAdd(itemName)}>
        Add article
      </button>
    </form>
  );
}
