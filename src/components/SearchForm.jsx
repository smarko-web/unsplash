import { toast } from 'react-toastify';
import { useMyContext } from '../appContext';
const SearchForm = () => {
  const {setSearchTerm} = useMyContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('search');
    if (!searchTerm) {
      return toast.error('please enter a search term');
    }
    setSearchTerm(searchTerm);
    localStorage.setItem('searchTerm', searchTerm);
    formData.delete('search');
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cars"
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
