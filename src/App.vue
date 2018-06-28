<template>
  <div id="app" >
    <!-- <h1 class="header">C4C Appointment</h1> -->
    <transition :name="fade">
      <div class="loading-container" v-if="isLoading">
        <!-- <loading-icon></loading-icon> -->
        <hot-heart></hot-heart>
      </div>
      <router-view v-else class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
  import router from '@/router';
  import LoadingIcon from '@/components/LoadingIcon';
  import HotHeart from '@/components/HotHeart';
  import * as types from '@/store/mutation-types';


  export default {
    name: 'app',
    data() {
　　　　return {
          fade: 'slide-left'
　　　　}
　　},
    components: {
      LoadingIcon,
      HotHeart
    },
    async created() {
      this.loadApplication();
      await this.fetchNetwork();
      this.loadApplicationDone();
    },
    computed: {
      ...mapState([ 'isLoading', 'route']),
    },
    watch: {
　　　'$route' (to, from) {
  　　　　let isBack = this.$router.isBack;
  　　　　if(isBack) {
　　　　　　this.transitionName = 'slide-right';
　　　　　} else {
　　　　　  this.transitionName = 'slide-left';
　　　　　}
    　　 this.$router.isBack = false;
  　　}
　  },
    methods: {
      ...mapActions(['loadApplication', 'loadApplicationDone',"fetchNetwork"]),
    }
  };
</script>

<style lang="scss">
@import '~styles/app.scss';
.loading-container {
  height: 100%;
  opacity: 0.75;
  /* z-index: 999; */
  position: absolute;
  width: 100%;
  z-index: 999;
  background-color: white;
}
</style>
