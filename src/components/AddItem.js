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
        role="searchbox"
        type="search"
        className="Add__input"
      ></input>
      <button aria-label={'add button'} className="Add__Button">
        Add article
      </button>
    </form>
  );
}
