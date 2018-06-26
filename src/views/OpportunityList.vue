<template>
  <div class="app-container">
    <div class="loading-container" v-if="isLoadingPage">
      <loading-icon></loading-icon>
    </div>
    <md-table class="chineseStyle" v-model="oppList" md-sort="id" md-sort-order="asc" md-card md-fixed-header>
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
    <!--<md-table-pagination-->
      <!--md-size="10"-->
      <!--md-total= "10"-->
      <!--md-page="1"-->
      <!--md-label="Rows"-->
      <!--md-separator="of"-->
      <!--:md-page-options="[5, 10, 25, 50]"-->
      <!--@pagination="onPagination"></md-table-pagination>-->
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  import LoadingIcon from '@/components/NewLoadingIcon';
  import Util from '@/utils/utils';
  export default {
    name: 'opportnityList',
    data (){
      return {
        List: null,
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10
        }
      }
    },
    components: {
      LoadingIcon
    },
    filters: {
      convertTime(Time){
        return Util.convertTimeStamp(Time);
      }
    },
    async created() {
      this.loadPage();
      await this.fetchOpportunityList();
      //this.getList();
      this.loadPageDone();
    },
    computed:{
      ...mapGetters(['oppList', 'selectOpportunity']),
      ...mapState([ 'isLoadingPage']),
    },
    methods:{
      ...mapActions( ['fetchOpportunityList']),
      ...mapActions(['loadPage', 'loadPageDone']),
      onPress: function(ObjectID){
        this.$router.push({ name: 'OpportunityDetail', params: { id: ObjectID }})
      },
      backHome: function(){
        window.history.go(-1);
      },
      onPagination(page) {
        this.page = page;
      },
      getList: function(){
        this.List = [
//          {
//            ID: 1,
//            CloseDate: '/Date(1321401600000)/'
//          }
//          {
//            id: 2,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 3,
//            name: 'Opportunity 3',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 4,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 5,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 6,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 7,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 8,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 9,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 10,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 11,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 12,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 13,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 14,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 15,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 16,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 17,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 18,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 19,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 20,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
//          {
//            id: 21,
//            name: 'Opportunity 2',
//            account: 'Sean Li',
//            status: '2-In process',
//            salesPhase: 'Identify opportunity',
//            closeDate: '2018-06-29',
//            score: '100'
//          },
        ];
        //this.total = this.list.length;
      }
    }
  }

</script>

<style scoped>
  .chineseStyle .md-content.md-theme-default{
    height: auto !important;
    max-height: 780px !important;
  }
</style>
