import { useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  const [comment, setComment] = useState("");
  const [loadingComment, setLoadingComment] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingComment(true);
    setTimeout(() => {
      console.log("ritardo");
      setLoadingComment(false);
      setComment(input);
    }, 2000);
    setInput("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Comment</label>
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button type="submit">
          {loadingComment ? "loading comment..." : "GO"}
        </button>
      </form>
      <h2>{comment}</h2>
    </div>
  );
}

export default Form;
