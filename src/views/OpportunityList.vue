<template>
  <div class="app-container">
    <div class="loading-container" v-if="isLoadingPage">
      <!-- <loading-icon></loading-icon> -->
      <hot-heart></hot-heart>
    </div>
    <md-table v-model="oppList" md-sort="id" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <h1 class="md-title">Opportunity List</h1>
        <md-button v-on:click="backHome">
          <md-icon>home</md-icon>
        </md-button>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="ID" md-numeric>{{ item.OpportunityID }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="Name">{{ item.Name.content }}</md-table-cell>
        <md-table-cell md-label="Account" md-sort-by="Account">{{ item.AccountName.content }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="StatusCode">
          <div class = "status">{{ item.StatusCodeText }}</div>
        </md-table-cell>
        <md-table-cell md-label="Sales Phase" md-sort-by="SalesPhaseCode">{{ item.SalesPhaseCodeText }}</md-table-cell>
        <md-table-cell md-label="Close Date">
          {{item.CloseDate | convertTime}}
        </md-table-cell>
        <!--<md-table-cell md-label="Score" md-sort-by="Score">{{ item.Score }}</md-table-cell>-->
        <md-table-cell md-label="User Action">
          <md-button v-on:click="onPress(item.ObjectID)">
            <md-icon>edit</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  import LoadingIcon from '@/components/NewLoadingIcon';
  import Util from '@/utils/utils';
  import HotHeart from '@/components/HotHeart';
  export default {
    name: 'opportnityList',
    data (){
      return {
        List: null
      }
    },
    components: {
      LoadingIcon,
      HotHeart
    },
    filters: {
      convertTime(Time){
        return Util.convertTimeStamp(Time);
      }
    },
    async created() {
      this.loadPage();
      await this.fetchOpportunityList();
      this.loadPageDone();
    },
    computed:{
      ...mapGetters(['oppList', 'selectOpportunity']),
      ...mapState([ 'isLoadingPage']),
    },
    methods:{
      ...mapActions( ['fetchOpportunityList','getSelectOpportunity']),
      ...mapActions(['loadPage', 'loadPageDone']),

      onPress: function(ObjectID){
        this.getSelectOpportunity(ObjectID);
        this.$router.push({ name: 'OpportunityDetail', params: { id: ObjectID }})
      },
      backHome: function(){
        window.history.go(-1);
      },
    }
  }

</script>

<style scoped>
  .md-content.md-theme-default{
    height: auto !important;
    max-height: 780px !important;
  }
</style>
