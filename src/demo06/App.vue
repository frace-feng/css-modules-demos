<template>
<div>
  <h1 :class="style.title">
      Hello World
    </h1>
</div>
</template>

<script>
import style from './App.css';
export default {
  data(){
    return {
      style
    }
  }
}
</script>