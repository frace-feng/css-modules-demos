<template>
<div>
  <h1 :class="style.title">
      Hello World
    </h1>
    <h1 class="title">
      Hello World
    </h1>
    <h1 :class="style4.title">
      Hello World
    </h1>
    <h1 :class="style5.title">
      Hello World
    </h1>
    <h1 :class="style6.title">
      Hello World
    </h1>
</div>
</template>

<script>
import style from './demo01/App.css';
import style2 from './demo02/App.css';
import style4 from './demo04/App.css';
import style5 from './demo05/App.css';
import style6 from './demo06/App.css';
export default {
  data(){
    return {
      style,
      style2,
      style4,
      style5,
      style6,
    }
  }
}
</script>