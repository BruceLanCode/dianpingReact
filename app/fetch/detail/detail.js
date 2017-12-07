import { get } from '../get';

export const getInfoData = id => get(`/api/detail/info/${id}`);

export const getCommentData = (page,id) => get(`/api/detail/comment/${page}/${id}`);
