import Vue from 'vue'
import Vuex from 'vuex'
import * as client from '../client/fake-client';
import axios from 'axios';

Vue.use(Vuex)

export const actions = {
  loadCountries: 'loadCountries',
  loadCountry: 'loadCountry',
  saveNewCountry: 'saveNewCountry',
  saveExistingCountry: 'saveExistingCountry',
  toggleSelectedCountryByLatLng: 'toggleSelectedCountryByLatLng',
  loadArticle: 'loadArticle',
  loadArticles: 'loadArticles',
  loadArticlesByCountryCode: 'loadArticlesByCountryCode',
  saveNewArticle: 'saveNewArticle'
};

export const mutations = {
  setCountries: 'setCountries',
  setCountriesLoading: 'setCountriesLoading',
  setCountryLoading: 'setCountryLoading',
  setCountrySaving: 'setCountrySaving',
  setCountry: 'setCountry',
  setSelectedCountry: 'setSelectedCountry',
  addSelectedCountry: 'addSelectedCountry',
  clearSelectedCountry: 'clearSelectedCountry',
  setArticles: 'setArticles',
  setArticlesLoading: 'setArticlesLoading',
  setArticle: 'setArticle',
  setArticleLoading: 'setArticleLoading',
  setArticleSaving: 'setArticleSaving'
};

export default new Vuex.Store({
  state: {
    country: {
      loading: false,
      saving: false,
      value: null
    },
    countries: {
      loading: false,
      value: []
    },
    map: {
      selectedCountry: []
    },
    article: {
      loading: false,
      saving: false,
      value: null
    },
    articles: {
      loading: false,
      value: []
    }
  },
  mutations: {
    [mutations.setCountry](state, country) {
      state.country.value = country;
    },
    [mutations.setCountryLoading](state, loading) {
      state.country.loading = loading;
    },
    [mutations.setCountrySaving](state, saving) {
      state.country.saving = saving;
    },
    [mutations.setCountries](state, countries) {
      state.countries.value = countries;
    },
    [mutations.setCountriesLoading](state, loading) {
      state.countries.loading = loading;
    },
    [mutations.setSelectedCountry](state, country) {
      state.map.selectedCountry = [country]
    },
    [mutations.addSelectedCountry](state, country) {
      if (state.map.selectedCountry.length === 0) {
        state.map.selectedCountry = [...state.map.selectedCountry, country];
      } else if (!state.map.selectedCountry.map(c => c.code).includes(country.isoAlpha3)) {
        state.map.selectedCountry = [...state.map.selectedCountry, country];
      }
    },
    [mutations.clearSelectedCountry](state, country) {
      state.map.selectedCountry = state.map.selectedCountry.filter(c => c.code !== country.isoAlpha3)
    },
    [mutations.setArticle](state, article) {
      state.article.value = article;
    },
    [mutations.setArticleLoading](state, loading) {
      state.article.loading = loading;
    },
    [mutations.setArticleSaving](state, saving) {
      state.article.saving = saving;
    },
    [mutations.setArticles](state, articles) {
      state.articles.value = articles;
    },
    [mutations.setArticlesLoading](state, loading) {
      state.articles.loading = loading;
    }
  },
  actions: {
    async [actions.loadCountries]({ commit }) {
      commit(mutations.setCountriesLoading, true);
      commit(mutations.setCountries, await client.get(`countries`));
      commit(mutations.setCountriesLoading, false);
    },
    async [actions.loadCountry]({ commit }, id) {
      commit(mutations.setCountryLoading, true);
      commit(mutations.setCountry, await client.get(`countries/${id}`));
      commit(mutations.setCountryLoading, false);
    },
    async [actions.saveNewCountry]({ commit }, country) {
      commit(mutations.setCountrySaving, true);
      commit(mutations.setCountry, await client.post(`countries`, country));
      commit(mutations.setCountrySaving, false);
    },
    async [actions.saveExistingCountry]({ commit }, country) {
      commit(mutations.setCountrySaving, true);
      commit(mutations.setCountry, await client.put(`countries/${country.id}`, country));
      commit(mutations.setCountrySaving, false);
    },
    async [actions.toggleSelectedCountryByLatLng]({ commit, state }, data) {
      const { latlng, add } = data
      try {
        const code = await axios.get(
          `http://api.geonames.org/countryCode?lat=${latlng.lat}&lng=${latlng.lng}&username=jimmynicelegs`
        );

        if (code) {
          const result = await axios.get(
            `http://api.geonames.org/countryInfo?lang=GB&country=${code.data}&username=jimmynicelegs&type=json`
          );
          const country = result.data.geonames[0];

          if (add) {
            if (state.map.selectedCountry == null || !state.map.selectedCountry.map(c => c.code).includes(country.isoAlpha3)) {
              commit(mutations.addSelectedCountry, {
                name: country.countryName,
                code: country.isoAlpha3
              });
            } else {
              commit(mutations.clearSelectedCountry, country);
            }
          } else {
            commit(mutations.setSelectedCountry, {
              name: country.countryName,
              code: country.isoAlpha3
            })
          }
        }
      } catch { }
    },
    async [actions.loadArticle]({ commit }, id) {
      commit(mutations.setArticleLoading, true);
      commit(mutations.setArticle, await client.get(`articles/${id}`));
      commit(mutations.setArticleLoading, false);
    },
    async [actions.loadArticles]({ commit }) {
      commit(mutations.setArticlesLoading, true);
      commit(mutations.setArticles, await client.get(`articles`));
      commit(mutations.setArticlesLoading, false);
    },
    async [actions.loadArticlesByCountryCode]({ commit }, countryCodes) {
      commit(mutations.setArticlesLoading, true);
      const articles = await client.get(`articles`);
      const filtered = articles.filter(a => a.links.map(l => l.code).some(
        linkCode => countryCodes.includes(linkCode)
      ));
      commit(mutations.setArticles, filtered);
      commit(mutations.setArticlesLoading, false);
    },
    async [actions.saveNewArticle]({ commit }, article) {
      commit(mutations.setArticleSaving, true);
      commit(mutations.setArticle, await client.post(`articles`, article));
      commit(mutations.setArticleSaving, false);
    }
  },
  modules: {
  }
})
