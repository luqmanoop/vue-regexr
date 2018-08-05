<template>
    <div class="regex-box">
        <app-pattern-box></app-pattern-box>
        <app-text-box></app-text-box>
    </div>
</template>

<script>
import appTextBox from './TextBox';
import appPatternBox from './PatternBox';

export default {
  components: {
    appTextBox,
    appPatternBox
  }
};
</script>

<style scoped>
*,
*::before,
*::after {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
}

body {
  font-size: 16px;
}

.regex-box {
  max-width: 700px;
  margin: 5rem auto;
  background-color: #001221;
  border-radius: 5px;
}
</style>
