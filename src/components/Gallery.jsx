import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
const url = `https://api.unsplash.com/photos/?client_id=${
  import.meta.env.VITE_Access_Key
}query=car`;

const Gallery = () => {

  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      try {
        const result = await axios.get(url);
        const {data} = await result.data;
         return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        console.log(item);
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>  
        );
      })}
    </section>
  );
}
export default Gallery