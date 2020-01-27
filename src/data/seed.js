import countries from "./countries";

export default () => {
    localStorage.setItem('countries', JSON.stringify(countries));
}
