import { get } from '../get';
import { post } from '../post';

export const getOrderListData = username => get(`/api/orderList/${username}`);
export const postComment = (id,comment,star) => post('/api/submitComment',{
    id,
    comment,
    star
});