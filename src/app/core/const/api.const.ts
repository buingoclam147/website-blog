export const API = {
    LOGIN: '/login',
    INFOMATION: (id: any) => {
        return 'user/' + id;
    },
    UPDATEUSER: (id: any) => {
        return 'user/' + id;
    },
    CATEGORY: {
        GET_LIST: 'category',
        GET_ONE: (id: any) => {
            return 'category/' + id;
        },
        POST_ONE: 'category',
        UPDATE: (id: any) => {
            return 'category/' + id;
        },
        DELETE_ONE: (id: any) => {
            return 'category/' + id;
        },
        DELETE_MANY: 'category/delete-many'
    },
    BLOG: {
        GET_LIST: 'blog',
        GET_ONE: (id: any) => {
            return 'blog/' + id;
        },
        POST_ONE: 'blog',
        UPDATE: (id: any) => {
            return 'blog/' + id;
        },
        DELETE_ONE: (id: any) => {
            return 'blog/' + id;
        },
        DELETE_MANY: 'blog/delete-many'
    }
};
