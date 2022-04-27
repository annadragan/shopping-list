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
    <form autocomplete="off" className="Add-item__form" onSubmit={handleSubmit}>
      <label htmlFor="new__item" className="Add-item__label">
        Your article:
      </label>
      <input
        id="new__item"
        onChange={event => setItemName(event.target.value)}
        value={itemName}
        role="searchbox"
        type="search"
        className="Add__input"
        required
      />
      <button aria-label={'click to add item'} className="Add__Button">
        Add article
      </button>
    </form>
  );
}
