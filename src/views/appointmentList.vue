<template>
  <div>
    <div class="loading-container" v-if="isLoadingPage">
      <loading-icon></loading-icon>
    </div>
    <div v-else id="content">
      <h3 class="listHeader">My Appointments</h3>
      <hr></hr>
      <div >
        <ul>
          <li v-for="(item,index) in apmList" class="listItem" @click="onPress(item.ID)">
            <div>
              <span>{{index}}</span>
              <span>{{item.ID}}</span>
              <span>{{item.Subject}}</span>
              <time>{{item.StartDateTime.content}}</time>
              <span>{{item.Owner.content}}</span>
              <span>{{item.EndDateTime.content}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  import LoadingIcon from '@/components/LoadingIcon';
  export default {
    data:function(){
      return {

      }
    } ,
    components: {
      LoadingIcon
    },
    async created() {
      this.loadPage();
      await this.fetchApponitmentList();
      this.loadPageDone();
    },
    computed:{
      ...mapGetters(['apmList', 'selectAppointment']),
      ...mapState([ 'isLoadingPage']),
    },
    methods:{
      ...mapActions( ['fetchApponitmentList']),
      ...mapActions(['loadPage', 'loadPageDone']),
      onPress: function(id){
        this.$router.push({ name: 'appointmentDetail', params: { id: id }})
      },
    }
  }
</script>
