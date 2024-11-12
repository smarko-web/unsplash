import { toast } from 'react-toastify';
import { useMyContext } from '../appContext';
const SearchForm = () => {
  const {searchTerm, setSearchTerm} = useMyContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('search');
    if (!searchTerm) {
      return toast.error('please enter a search term');
    }
    console.log(searchTerm);
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    // Access Key
    // dbav3Ob8wq_DoWUXl4I6_VV26PUb7sR1SwD4aza6KsA
    // Secret key
    // r7iWU5uqfjjNkC7OMl7gnC66K6qHhvESdSkvC8w7j6A;
    // app id  673464
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
