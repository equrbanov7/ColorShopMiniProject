import {
    instance
} from "./index";

const ENUMS = {
    users: "users",
    userId: "userId"
};

export const postNewUser= async (data) => {
    const res = await instance.post(`/${ENUMS.users}`, data);
    return res.data;
};

export const putUser = async (userId, data) => {
    const res = await instance.put(`/${ENUMS.users}/${userId}`, data);
    return res.data;
};

export const getUser = async (userId) => {
    const res = await instance.get(`/${ENUMS.users}/${userId}`);
    return res.data;
};

export const patchUser = async (userId, data) => {
    const res = await instance.patch(`/${ENUMS.users}/${userId}`, data);
    return res.data;
  };