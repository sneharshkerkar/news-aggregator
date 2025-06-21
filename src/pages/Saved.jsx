import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";

const Saved = () => {
  const articles = useSelector((state) => state.saved.articles);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        {articles.length === 0 ? (
          <p className="text-center">No saved articles.</p>
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

export default Saved;
