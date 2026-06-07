import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/gods";

export const getGods = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching gods", error);
  }
};

export const getGodById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error Fetching God Details", error);
  }
};
