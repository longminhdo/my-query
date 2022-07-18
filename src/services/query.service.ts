import axiosClient from '@/utils/axiosClient';

export const getAllTags = async () => {
  const res = await axiosClient.get('/web/tags/all');

  return res;
};

export const getAllPosts = async () => {
  const res = await axiosClient.get('/web/posts/all');

  return res;
};

export const createNewQuery = async () => {};
