import './ListItem.css';

export default function ListItem({ curry, onDelete }) {
  return (
    <ul role="list" className="Shopping__list">
      {curry.map(item => {
        return (
          <li className="Shopping__list__item" key={item._id}>
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
