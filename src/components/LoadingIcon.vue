<template>
  <div :class="classObject">
    <loader :size="size" color="#999999"></loader>
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
      return this.isSmall ? '8px' : '20px';
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
</style>
