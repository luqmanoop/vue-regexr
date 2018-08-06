<template>
  <div class="pattern-box-wrapper">
    <input autofocus v-model="pattern" placeholder="Enter pattern" class="pattern-box" type="text">
    <p v-show="error" class="error-text">{{ error }}</p>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  data() {
    return {
      pattern: '',
      error: ''
    };
  },
  computed: mapGetters(['error']),
  watch: {
    pattern(value) {
      try {
        new RegExp(value);
        this.updatePattern(value);
        this.error = '';
      } catch (error) {
        this.error = error.message.split(':')[0];
      }
    }
  },
  methods: mapMutations(['updatePattern'])
};
</script>

<style>
.pattern-box {
  width: 100%;
  font: inherit;
  min-height: 46px;
  background: transparent;
  color: #d6d7cc;
  padding: 2.3rem 25px;
  border: 0;
  outline: none;
}
.pattern-box-wrapper {
  position: relative;
}
.error-text {
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #d6d7cc;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
}
</style>
