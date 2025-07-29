import ItemCard from "./ItemCard";

function Products({ items }) {
  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      {/* {items.map((item) => {
          return <article>{item.name}</article>
        })} */}
      {/* {items.map(function name(item) {
          return <article>{item.name}</article>
        })} */}
      {/* {[
          <li>item 1</li>,
          <li>item 2</li>,
          <li>item 3</li>
        ]} */}
    </div>
  );
}

export default Products;
