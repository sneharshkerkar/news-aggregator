const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const fetchTopHeadlines = async (category = "general", country = "us") => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&topic=${category}&token=${API_KEY}`
    );
    const data = await response.json();

    if (!data.articles || !Array.isArray(data.articles)) {
      return [];
    }

    return data.articles;
  } catch (error) {
    console.error("GNews API Error:", error);
    return [];
  }
};
