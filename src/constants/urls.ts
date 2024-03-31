const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        base: users,
        posts: (id: number): string => `${users}/${id}/${posts}`
    },
    posts: {
        base: posts,
        comments: (id: number): string => `${posts}/${id}/${comments}`
    }
};


export {
    baseURL,
    urls
};