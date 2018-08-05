<template>
    <div>
        <input v-model="pattern" placeholder="Enter pattern" class="pattern-box" type="text">
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  data() {
    return {
      pattern: ''
    };
  },
  watch: {
    pattern(value) {
      this.updatePattern(value);
    }
  },
  methods: mapMutations(['updatePattern'])
};
</script>

<style scoped>
.pattern-box {
  width: 100%;
  font-size: inherit;
  min-height: 46px;
  background: transparent;
  color: #d6d7cc;
  padding: 4rem 25px;
  border: 0;
  outline: none;
  border-bottom: 1px solid #f7f7f742;
}
</style>
