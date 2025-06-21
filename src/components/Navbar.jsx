import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  const { dark, setDark } = useContext(ThemeContext);

  // GNews accepted topics
  const categories = [
    "breaking-news",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health"
  ];

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-10">
      <h1 className="text-2xl font-bold">
        <Link to="/">📰 News Aggregator</Link>
      </h1>

      <div className="flex flex-wrap gap-2 items-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-1 border rounded-md dark:bg-gray-700"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <Link to="/saved" className="underline">
          Saved
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
