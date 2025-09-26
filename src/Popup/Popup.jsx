import { useEffect, useState } from "react";

const Popup = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((post) => (
          <li>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
