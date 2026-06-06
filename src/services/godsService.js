import axios from "axios";

const API_URL = "http://localhost:5000/gods";

export const getGods = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching gods", error);
  }
};
