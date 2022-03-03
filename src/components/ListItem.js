export default function ListItem({ initialItems }) {
  return (
    <ul className="shopping__list">
      {initialItems.map(item => {
        return (
          <li key={initialItems._id}>
            <button>{item.name.en}</button>
          </li>
        );
      })}
    </ul>
  );
}
