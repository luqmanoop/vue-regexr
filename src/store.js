import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pattern: '',
    text: '',
    matches: '',
    flags: 'g'
  },
  getters: {
    flags({ flags }) {
      return flags;
    },
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
    updatePattern(state, payload) {
      state.pattern = payload;
      const { text, pattern, flags } = state;
      state.matches = getMatches(text, pattern, flags);
    },
    updateText(state, payload) {
      state.text = payload;
      const { text, pattern, flags } = state;
      state.matches = getMatches(text, pattern, flags);
    },
    updateFlags(state, payload) {
      state.flags = payload;
      const { text, pattern, flags } = state;
      state.matches = getMatches(text, pattern, flags);
    }
  }
});

// helper
const getMatches = (text, pattern, flags) =>
  text
    .replace(/\n$/g, '\n\n')
    .replace(new RegExp(pattern, flags), '<mark>$&</mark>');
