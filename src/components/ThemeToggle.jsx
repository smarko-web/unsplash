import { useMyContext } from "../appContext";
import { FaRegMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useMyContext();
  return (
    <section className="toggle-container">
      <button className={isDarkTheme ? "dark-toggle" : ''} onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaSun className="toggle-icon" />
        ) : (
          <FaRegMoon className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
export default ThemeToggle




