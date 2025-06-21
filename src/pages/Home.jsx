import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import { fetchTopHeadlines } from "../utils/api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedCountry, setSelectedCountry] = useState("us");

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchTopHeadlines(selectedCategory, selectedCountry);
        setArticles(data);
      } catch (err) {
        console.error("Failed to fetch news", err);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [selectedCategory, selectedCountry]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      <div className="max-w-6xl mx-auto px-4 py-6">
        {loading ? (
          <p className="text-center">Loading news...</p>
        ) : articles.length === 0 ? (
          <p className="text-center">No articles found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
