<template>
  <div class="regex-box">
    <div class="main">
      <app-pattern-box></app-pattern-box>
      <app-text-box></app-text-box>
    </div>
    <aside>
      <app-side-bar></app-side-bar>
    </aside>
  </div>
</template>

<script>
import appTextBox from './TextBox';
import appPatternBox from './PatternBox';
import appSideBar from './SideBar';

export default {
  components: {
    appTextBox,
    appPatternBox,
    appSideBar
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
  font: 16px 'Open Sans', sans-serif;
}

body,
html {
  width: 100%;
  height: 100%;
}

.regex-box {
  background-color: #001221;
  display: flex;
  width: 850px;
  height: 500px;
  margin: 5rem auto;
  position: relative;
  border-radius: 5px 0 0 5px;
  border: 1px solid;
  box-shadow: 0px 1rem 0.8rem rgba(0, 0, 0, 0.2);
}

.main {
  display: flex;
  flex-direction: column;
  width: 550px;
}

aside {
  width: 300px;
  height: 300px;
}
</style>
