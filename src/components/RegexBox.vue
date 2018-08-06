<template>
  <div>
    <div class="regex-box">
      <div class="main">
        <app-pattern-box></app-pattern-box>
        <app-text-box></app-text-box>
      </div>
      <aside>
        <app-side-bar></app-side-bar>
      </aside>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appTextBox from './TextBox';
import appPatternBox from './PatternBox';
import appSideBar from './SideBar';
import appFooter from './Footer';

export default {
  components: {
    appTextBox,
    appPatternBox,
    appSideBar,
    appFooter
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
  font: 14px 'Open Sans', sans-serif;
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
  border-radius: 5px;
  transition: all 0.25s linear;
}
.regex-box:hover {
  box-shadow: 0.4rem 1.4rem 1.4rem rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
}

.main {
  display: flex;
  flex-direction: column;
  width: 550px;
}

aside {
  width: 300px;
  padding: 1.5rem;
  border-left: 1px solid #ffffff31;
  overflow-y: scroll;
}

aside::-webkit-scrollbar {
  background: #3f4545;
  width: 10px !important;
}

aside::-webkit-scrollbar-track {
  border-radius: 10px !important;
}

aside::-webkit-scrollbar-thumb {
  border-radius: 10px !important;
  -webkit-box-shadow: inset 0 0 6px rgba(54, 52, 52, 0.925) !important;
  box-shadow: inset 0 0 6px rgba(54, 52, 52, 0.863) !important;
}
</style>
