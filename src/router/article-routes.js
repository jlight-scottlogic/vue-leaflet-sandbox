import Articles from '../views/articles/Articles.vue'
import ArticleLayout from '../views/articles/ArticleLayout.vue'
import Article from '../views/articles/Article.vue'
import CreateArticle from '../views/articles/CreateArticle.vue'

const routes = [
    {
        path: '/articles/create',
        name: 'create-article',
        component: CreateArticle
    },
    {
        path: '/articles/:id',
        name: 'article-layout',
        component: ArticleLayout,
        children: [
            {
                path: 'details',
                name: 'article-details',
                component: Article
            }
        ]
    },
    {
        path: '/articles',
        name: 'articles',
        component: Articles
    }
];

export default routes;
