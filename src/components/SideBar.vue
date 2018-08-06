<template>
  <div class="references">
    <div class="reference">
      <h3 class="title mb">Metacharacters</h3>
      <h4 class="caption mb">Matacharacters express sets of characters or special characters.</h4>
      <ul class="characters">
        <li class="character mb">
          <p class="character__code">
            <span class="purple">.</span>
          </p>
          <p class="character__info">
            <span>any character</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span>^</span>
          </p>
          <p class="character__info">
            <span>beginning of a line</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span>$</span>
          </p>
          <p class="character__info">
            <span>end of a line</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span>\</span>
          </p>
          <p class="character__info">
            <span>quotes special characters <br>(
              <span class="purple">* ? + [ ] ( ) { } ^ $ | \ . /</span> )
            </span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\w</span>
          </p>
          <p class="character__info">
            <span>word</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\t</span>
          </p>
          <p class="character__info">
            <span>horizontal tabulation</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\n</span>
          </p>
          <p class="character__info">
            <span>new line</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\d</span>
          </p>
          <p class="character__info">
            <span>any digit</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\t</span>
          </p>
          <p class="character__info">
            <span>white space character (
              <span class="blue">\t \n \f \r \{Z}</span>)</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">[...]</span>
          </p>
          <p class="character__info">
            <span>match any character (or range of characters) inside the bracket. Range may be e.g.
              <span class="blue">[a-z], [A-Z], [3...5]</span>, etc.</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\D</span>
          </p>
          <p class="character__info">
            <span>any character that is not a decimal digit</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\S</span>
          </p>
          <p class="character__info">
            <span>non-whitespace character</span>
          </p>
        </li>
        <li class="character">
          <p class="character__code">
            <span class="blue">\W</span>
          </p>
          <p class="character__info">
            <span>non-word character</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="reference">
      <h3 class="title mb">Operators</h3>
      <h4 class="caption mb">Operators allow to desribe how an expression (or subexpression) should be matched.</h4>
      <ul class="characters">
        <li class="character mb">
          <p class="character__code">
            <span>(
              <span class="white">…</span>)</span>
          </p>
          <p class="character__info">
            <span>groups expression into subexpressions</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="white">A
              <span class="purple">|</span> B</span>
          </p>
          <p class="character__info">
            <span>groups expression into subexpressions</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">^</span>
          </p>
          <p class="character__info">
            <span>negation</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">*</span>
          </p>
          <p class="character__info">
            <span>match 0 or more times</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">+</span>
          </p>
          <p class="character__info">
            <span>match 1 or more times</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">?</span>
          </p>
          <p class="character__info">
            <span>match 0 or 1 time</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">{
              <span class="white">n</span> }</span>
          </p>
          <p class="character__info">
            <span>match exactly n times</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">{
              <span class="white">n
                <span class="purple">,</span> m</span> }</span>
          </p>
          <p class="character__info">
            <span>match exactly n times</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="reference">
      <h3 class="title mb">Non-capturing operators</h3>
      <h4 class="caption mb">These operators work by one simple rule. They are not captured in groups.</h4>
      <ul class="characters">
        <li class="character mb">
          <p class="character__code">
            <span class="disabled">( ? # ... )</span>
          </p>
          <p class="character__info">
            <span>comment</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">( ? :
              <span class="white">…</span> )</span>
          </p>
          <p class="character__info">
            <span>Subexpression must occur but it's not captured in group.</span>
          </p>
        </li>
        <li class="character mb">
          <p class="character__code">
            <span class="purple">( ? !
              <span class="white">…</span> )</span>
          </p>
          <p class="character__info">
            <span>Makes sure that the subexpression does not occur at current position. It's useful to exclude part of expression.</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.reference:not(:first-child) {
  margin-top: 1.6rem;
}
.reference * {
  color: #fff;
  font-size: 12px;
  font-weight: inherit;
  margin: 0;
  padding: 0;
}

.mb {
  margin-bottom: 0.5rem;
}

.title {
  font-size: 17px;
}

ul,
li {
  list-style: none;
}

.character {
  display: flex;
}

.character:not(:last-child) {
  margin-bottom: 15px;
}
.character__code {
  background: #00080e;
  border: 1px solid #f7f7f72d;
  padding: 0.3rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
}
.character__code span {
  white-space: nowrap;
  font-weight: 600;
  color: #c77ce0;
}
.character__info {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
}

.disabled,
.purple,
.blue,
.white {
  font-weight: 600;
}

.disabled {
  color: #888888 !important;
}
.purple {
  color: #c77ce0 !important;
}

.blue {
  color: #3c7fc2 !important;
}
.white {
  color: white !important;
}
</style>
