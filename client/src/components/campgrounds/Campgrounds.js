import React, { useState, useEffect } from "react";

function Campgrounds() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["parkCode", "name"]);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/campgrounds?q=${q}&limit=12&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [q]);

  function search(items) {
    return items.data.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works,{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="container">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for park..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
        </div>
        <ul className="card-grid">
          {search(items).map((item) => (
            <li>
              <article className="card" key={item.id}>
                <div className="card-image">
                  {item.images.map((images) => (
                    <img
                      src={`${images.url}`}
                      alt={item.name}
                      className="camp-photo"
                    />
                  ))}
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <li>
                    <span>{item.description}</span>
                  </li>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Campgrounds;
