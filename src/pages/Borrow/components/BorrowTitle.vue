<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name:'BorrowTitle',
  props:['title']
}
</script>

<style scoped>
  h1 {
    font-size: 16px;
    background: url(../../../../static/img/title.png) no-repeat left center;
    background-size: .03rem .18rem;
    background-position: .15rem;
    padding-left: .25rem;
    margin-bottom: .2rem; }
</style>
