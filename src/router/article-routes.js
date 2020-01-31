import Articles from '../views/articles/Articles.vue'
import CreateArticle from '../views/articles/CreateArticle.vue'

const routes = [
    {
        path: '/articles/create',
        name: 'create-article',
        component: CreateArticle
    },
    {
        path: '/articles',
        name: 'articles',
        component: Articles
    }
];

export default routes;
