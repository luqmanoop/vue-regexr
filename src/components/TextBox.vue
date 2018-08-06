<template>
  <div class="text-box">
    <div class="backdrop">
      <div class="matches" v-html="matches"></div>
    </div>
    <textarea v-model="text" placeholder="Enter text to check matches"></textarea>
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
    }
  },
  methods: mapMutations(['updateText'])
};
</script>
<style>
.text-box {
  height: 400px;
  position: relative;
  background-color: #282a36;
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
  position: absolute;
  z-index: 2;
  resize: none;
  color: #fff;
}

.matches {
  white-space: pre-wrap;
  word-wrap: break-word;
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
