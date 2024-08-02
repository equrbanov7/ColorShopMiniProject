import {
    instance
} from "./index";

const ENUMS = {
    products: "products",
    categoryId: "category_id"
};

export const getProducts = async (

) => {
    const res = await instance.get(`/${ENUMS.products}`);
    return res.data;
};

export const getProductsByCategoryId = async (
    selectedCategoryId
) => {
    // http://localhost:5000/products?category_id=3
    const res = await instance.get(`/${ENUMS.products}?${ENUMS.categoryId}=${selectedCategoryId}`);
    return res.data;
};