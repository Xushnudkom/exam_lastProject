import http from "@/api/interseptors";

export const getProductApi = (page, limit) => {
  return http.get(`/products?page=${page}&limit=${limit}`);
};
export const getProductId = async (product_id) => {
  try {
    const response = await http.get(`/products/${product_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

