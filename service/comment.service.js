import http from "@/api/interseptors";

export const getComment = async (page, limit, product_id) => {
  try {
    const response = await http.get(`/product-comments?page=${page}&limit=${limit}&id=${product_id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addComment = async (values) => {
  try {
    const response = await http.post('/comment', values);
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};