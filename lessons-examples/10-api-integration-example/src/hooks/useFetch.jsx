import { useState, useEffect } from "react";

function useFetch(url, id, page) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network books response was not ok");
        }
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        setError(`Error getting books - ${error}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [url, id, page]);

  return {
    loading, 
    error,
    data
  }
}

export default useFetch;
