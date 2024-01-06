import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get("https://backend-production-7211.up.railway.app/api/tasks/", {
      headers: {
        'Access-Control-Allow-Origin': 'https://abject-question-production.up.railway.app'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
