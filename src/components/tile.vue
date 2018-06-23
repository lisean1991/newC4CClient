<template>
  <div class="tile" v-on:click="$emit('press',id)">
    <h2>{{title}}</h2>
    <span>{{count}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    }
  }
</script>
