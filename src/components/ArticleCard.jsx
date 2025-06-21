import { useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle } from "../redux/savedSlice";

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved.articles);

  const isSaved = saved.some((item) => item.url === article.url);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeArticle(article));
    } else {
      dispatch(addArticle(article));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all">
      {article.urlToImage && (
        <img src={article.urlToImage} alt="news" className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
        <p className="text-sm mb-2">{article.description || "No description"}</p>
        <div className="flex justify-between items-center">
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            Read more
          </a>
          <button
            onClick={handleSave}
            className="text-sm px-2 py-1 rounded border border-gray-400 dark:border-gray-600"
          >
            {isSaved ? "Remove" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
