import countries from "./countries";
import articles from "./articles";

export default () => {
    localStorage.setItem('countries', JSON.stringify(countries));
    localStorage.setItem('articles', JSON.stringify(articles));
}
