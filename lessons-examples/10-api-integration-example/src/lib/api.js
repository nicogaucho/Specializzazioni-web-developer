export async function fetchBook(id) {
  try {
    const response = await fetch(`https://gutendex.com/books/?ids=${id}`);
    if (!response.ok) {
      throw new Error("Network books response was not ok");
    }
    const json = await response.json();
    return json.results;
  } catch (error) {
    return error;
  }
}
