import axiosInstance from "../axios";



const search = async (query) => {
  try {
    const { data } = await axiosInstance.get("/Cats/search", {
      params: {
        query: query,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};


export const searchService = {
  search,
};