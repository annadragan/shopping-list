import './ShoppingList.css';

export default function ShoppingList({ articles, onDelete }) {
  return (
    <ul role="list" className="Shopping__list">
      {articles.map(item => {
        return (
          <li
            className="Shopping__list__item"
            key={item._id}
            aria-label={'click to delete item'}
          >
            <button
              className="Shopping__list__item__button"
              onClick={() => onDelete(item._id)}
            >
              {item.name.en}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
