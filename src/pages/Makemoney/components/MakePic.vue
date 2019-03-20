<template>
  <div class="lingdou">
    <img :src="picList"/>
  </div>
</template>

<script>
export default {
  name:"MakePic",
  props:['picList']
}
</script>


<style scoped>
  .lingdou {
    width: 3.75rem;
    background: #fff;
    padding-top: 0.1rem;
    padding-bottom: .4rem;
    margin-bottom: .1rem; }
  .lingdou img {
    width: 3.75rem;
    height: 1rem; }

</style>
