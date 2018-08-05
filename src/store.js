import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pattern: '',
    text: '',
    matches: ''
  },
  getters: {
    pattern({ pattern }) {
      return pattern;
    },
    text({ text }) {
      return text;
    },
    matches({ matches }) {
      return matches;
    }
  },
  mutations: {
    updatePattern(state, value) {
      state.pattern = value;
      state.matches = getMatches(state.text, state.pattern);
    },
    updateText(state, value) {
      state.text = value;
      state.matches = getMatches(state.text, state.pattern);
    }
  }
});

// helper
const getMatches = (text, pattern) =>
  text
    .replace(/\n$/g, '\n\n')
    .replace(new RegExp(pattern, 'gi'), '<mark>$&</mark>');
