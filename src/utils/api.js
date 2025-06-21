const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchTopHeadlines = async (category = "general", country = "us") => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
};
