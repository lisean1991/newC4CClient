<template>
  <div :class="classObject">
    <loader :size="size" color="red" class="busyLoader"></loader>
  </div>
</template>

<script>
import Loader from 'vue-spinner/src/BeatLoader';
export default {
  name: 'LoadingIcon',
  props: {
    isSmall: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Loader
  },
  computed: {
    size() {
      return this.isSmall ? '8rem' : '20rem';
    },
    classObject() {
      return {
        loading: true,
        inline: this.isInline,
      };
    }
  }
};
</script>

<style lang="scss" scoped>
  .loading {
    display: flex;
    justify-content: center;
    &.inline {
      margin: 0 5px;
      display: inline-block;
    }
  }
  .busyLoader{
    margin-top: 10rem;
  }
</style>
