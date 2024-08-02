import {instance} from "./index";

export const ENUMS = {
    categories: "categories"
};

export const getCategories = async () => {
  const res = await instance.get(`/${ENUMS.categories}`);
  return res.data;
};
