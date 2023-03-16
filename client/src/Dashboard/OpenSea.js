import React, { useState, useEffect } from "react";
import axios from "axios";

const OpenSeaTrendingCollections = () => {
  const [trendingCollections, setTrendingCollections] = useState([]);

  const fetchTrendingCollections = async () => {
    try {
      const response = await axios.get(
        "https://api.opensea.io/api/v1/collections",
        {
          params: {
            limit: 100,
            offset: 0,
            sort_by: "trending_desc",
          },
          headers: {
            "X-API-KEY": "YOUR_OPENSEA_API_KEY",
          },
        }
      );

      setTrendingCollections(response.data.collections);
    } catch (error) {
      console.error("Error fetching trending collections:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCollections();
  }, []);

  return (
    <div>
      <h1>Top 100 Trending Collections on OpenSea</h1>
      <ul>
        {trendingCollections.map((collection) => (
          <li key={collection.slug}>
            <a
              href={collection.external_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {collection.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
