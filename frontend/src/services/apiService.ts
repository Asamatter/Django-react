import axios from 'axios';


export const fetchData = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);}}