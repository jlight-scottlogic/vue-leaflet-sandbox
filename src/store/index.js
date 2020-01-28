import Vue from 'vue'
import Vuex from 'vuex'
import * as client from '../client/fake-client';

Vue.use(Vuex)

export const actions = {
  loadCountry: 'loadCountry',
  saveNewCountry: 'saveNewCountry',
  saveExistingCountry: 'saveExistingCountry'
};

export const mutations = {
  setLoading: 'setLoading',
  setSaving: 'setSaving',
  clearCountry: 'clearCountry',
  setCountry: 'setCountry'
};

export default new Vuex.Store({
  state: {
    loading: false,
    saving: false,
    country: null
  },
  mutations: {
    [mutations.setCountry](state, country) {
      state.country = country;
    },
    [mutations.clearCountry](state) {
      state.country = null;
    },
    [mutations.setLoading](state, loading) {
      state.loading = loading;
    },
    [mutations.setSaving](state, saving) {
      state.saving = saving;
    }
  },
  actions: {
    async [actions.loadCountry]({ commit }, id) {
      commit(mutations.setLoading, true);
      commit(mutations.setCountry, await client.get(`countries/${id}`));
      commit(mutations.setLoading, false);
    },
    async [actions.saveNewCountry]({ commit }, country) {
      commit(mutations.setSaving, true);
      commit(mutations.setCountry, await client.post(`countries`, country));
      commit(mutations.setSaving, false);
    },
    async [actions.saveExistingCountry]({ commit }, country) {
      commit(mutations.setSaving, true);
      commit(mutations.setCountry, await client.put(`countries/${country.id}`, country));
      commit(mutations.setSaving, false);
    }
  },
  modules: {
  }
})
