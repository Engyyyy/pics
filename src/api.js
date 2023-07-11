import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID k_dMYIXb3snAhferZKAmKweBfK8x6ntH0fX7_9gXGys",
    },
    params: {
      query: "oceans",
    },
  });

  console.log(response);

  return response;
};

export default searchImages;
