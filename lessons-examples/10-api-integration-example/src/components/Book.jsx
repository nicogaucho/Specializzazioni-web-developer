function Book({ book }) {
  const authors = book.authors.map((a) => a.name);
  const [ summaries ] = book.summaries.map((s) => s);
  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-auto">
      <figure>
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.title.substring(0, 50)}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {summaries.substring(1, 200) + "...read more"}
        </p>
        <div className="card-actions justify-end">
          {authors.map((a) => (
            <div className="badge badge-outline">{a}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book;
