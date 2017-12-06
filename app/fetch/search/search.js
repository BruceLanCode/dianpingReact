import { get } from '../get';

export const getSearchData = (page,cityName,category,keyword='') => {
    const keywordStr = keyword ? '/' + keyword : '';
    return get(`/api/search/${page}/${cityName}/${category + keywordStr}`);
};