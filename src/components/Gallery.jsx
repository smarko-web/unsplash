import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_Access_Key
}`;
import { useMyContext } from '../appContext';

const Gallery = () => {
  const { searchTerm } = useMyContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['images',searchTerm],
    queryFn: async () => await axios.get(`${url}&query=${searchTerm}`),
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data.data.results;
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