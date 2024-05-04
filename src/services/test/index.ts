import axiosInstance from "@/services/common/instance";

import { CommentServices, ServicesParams, PostServices, UsersServices } from "./type";

export const getTestPostsService = async (
    params?: ServicesParams,
    id?: number,
): Promise<PostServices[]> => {
    const response = await axiosInstance.get(
        id
            ? `https://jsonplaceholder.typicode.com/posts/${id}`
            : "https://jsonplaceholder.typicode.com/posts",
        {
            params,
        },
    );
    return response.data;
};

export const getTestCommentService = async (
    params?: ServicesParams,
    id?: number,
): Promise<CommentServices[]> => {
    const response = await axiosInstance.get(
        id
            ? `https://jsonplaceholder.typicode.com/comments/${id}`
            : "https://jsonplaceholder.typicode.com/comments",
        {
            params,
        },
    );
    return response?.data;
};

export const getTestUsersService = async (
    params?: ServicesParams,
    id?: number | string,
): Promise<UsersServices[]> => {
    const response = await axiosInstance.get(
        id
            ? `https://jsonplaceholder.typicode.com/users/${id}`
            : "https://jsonplaceholder.typicode.com/users",
        {
            params,
        },
    );
    return response?.data;
};
