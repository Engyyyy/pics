import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID k_dMYIXb3snAhferZKAmKweBfK8x6ntH0fX7_9gXGys",
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default searchImages;
