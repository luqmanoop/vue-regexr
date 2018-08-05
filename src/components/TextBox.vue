<template>
    <div class="text-box">
        <div class="backdrop">
            <div class="matches"></div>
        </div>
        <textarea placeholder="Enter text to check matches"></textarea>
    </div>
</template>

<style scoped>
.text-box {
  height: 400px;
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
  letter-spacing: 1px;
}

.backdrop {
  z-index: 1;
  pointer-events: none;
}

textarea {
  position: absolute;
  z-index: 2;
  resize: none;
  color: #d6d7cc;
}

/* dynamically generated content style with deep selector */
.matches >>> mark {
  border-radius: 3px;
  color: transparent;
  background-color: #9e3cc0;
}
</style>
