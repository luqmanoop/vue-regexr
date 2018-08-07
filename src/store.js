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
    matches({ text, pattern, flags }) {
      return getMatches(text, pattern, flags);
    }
  },
  mutations: {
    updatePattern(state, payload) {
      state.pattern = payload;
    },
    updateText(state, payload) {
      state.text = payload;
    },
    updateFlags(state, payload) {
      state.flags = payload;
    }
  }
});

// helper
const getMatches = (text, pattern, flags) =>
  text
    .replace(/\n$/g, '\n\n')
    .replace(new RegExp(pattern, flags), '<mark>$&</mark>');
