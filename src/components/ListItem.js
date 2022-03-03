import './ListItem.css';

export default function ListItem({ initialItems }) {
  return (
    <ul className="Shopping__list" role="list">
      {initialItems.map(item => {
        return (
          <li className="Shopping__list__item" key={initialItems._id}>
            <button className="Shopping__list__item__button">
              {item.name.en}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
