import http from '@/utils/http';

export const get = async (endpoint) => {
  try {
    const response = await http.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const post = async (endpoint, data) => {
  try {
    const response = await http.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const put = async (endpoint, data) => {
  try {
    const response = await http.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error putting data:', error);
    throw error;
  }
};

export const del = async (endpoint) => {
  try {
    const response = await http.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};  