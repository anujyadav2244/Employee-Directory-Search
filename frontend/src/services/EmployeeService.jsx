import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const getEmployees = async (search = "") => {
  const params = search.trim() ? { search: search.trim() } : {};

  const response = await axios.get(`${API}/employees`, {
    params,
  });

  return response.data;
};

export const searchEmployees = getEmployees;
