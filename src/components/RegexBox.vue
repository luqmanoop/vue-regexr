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
