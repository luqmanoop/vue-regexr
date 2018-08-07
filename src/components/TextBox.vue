<template>
  <div class="text-box">
    <div ref="backdrop" class="backdrop">
      <div class="matches" v-html="matches"></div>
    </div>
    <textarea ref="text" v-model="text" placeholder="Enter text to check matches" @scroll="handleScroll"></textarea>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      text: ''
    };
  },
  computed: mapGetters(['matches']),
  watch: {
    text(value) {
      this.updateText(value);
      this.handleScroll();
    }
  },
  methods: {
    ...mapMutations(['updateText']),
    handleScroll() {
      this.$refs.backdrop.scrollTop = this.$refs.text.scrollTop;
    }
  }
};
</script>
<style>
.text-box {
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #011627;
}

.text-box * {
  box-sizing: border-box;
}

.backdrop,
textarea {
  position: absolute;
  padding: 1.5rem 25px 8px;
  width: 100%;
  height: 100%;
  font-size: inherit;
  background-color: transparent;
  outline: none;
  border: 0;
  overflow: auto;
  letter-spacing: 1px;
}

.backdrop {
  z-index: 1;
  pointer-events: none;
}

.matches,
textarea {
  font: inherit;
}

textarea {
  display: block;
  position: absolute;
  z-index: 2;
  resize: none;
  color: #fff;
}
textarea::-webkit-scrollbar {
  background: #282a36;
  width: 17px !important;
}

textarea::-webkit-scrollbar-track {
  border-radius: 10px !important;
}

textarea::-webkit-scrollbar-thumb {
  border-radius: 10px !important;
}

.matches {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
}

/* dynamically generated content style with deep selector */
.matches mark {
  color: transparent;
  background-color: #9e3cc0;
}
.matches mark:nth-child(even) {
  background-color: #3c7fc2;
}
</style>
