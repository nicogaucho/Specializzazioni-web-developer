const styleCard = {
  backgroundColor: "green",
  color: "white",
  fontSize: "sans-serif"
}

function ItemCard({ item }) {
  return (
    <article style={styleCard}>
      <h1>{item.name}</h1>
    </article>
  )
}

export default ItemCard;