<template>
  <div>
    <button type="button" v-on:click="Change">Change Style</button>
  <div class="card-expansion" v-if="isNewHome">
    <md-card>
      <md-card-media>
        <img src="~/static/img/opportunity.png">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Opportunity List</div>
        <!--<div class="md-subhead">My opportunities</div>-->
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button v-on:click="onPress('OpportunityList')">Launch</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button>Learn more</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            此处应该有说明……
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>

    <md-card>
      <md-card-media>
        <img src="~/static/img/opportunity.png">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Create Opportunity</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button v-on:click="onPress('OpportunityCreate')">Launch</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button>Learn more</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            此处应有操作说明……
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
    <!--<md-card>-->
      <!--<md-card-media>-->
        <!--<img src="~/static/img/appointment.jpg">-->
      <!--</md-card-media>-->

      <!--<md-card-header>-->
        <!--<div class="md-title">Appointment List</div>-->
        <!--&lt;!&ndash;<div class="md-subhead">My opportunities</div>&ndash;&gt;-->
      <!--</md-card-header>-->

      <!--<md-card-expand>-->
        <!--<md-card-actions md-alignment="space-between">-->
          <!--<div>-->
            <!--<md-button v-on:click="onPress('appointmentList')">Launch</md-button>-->
          <!--</div>-->

          <!--<md-card-expand-trigger>-->
            <!--<md-button>Learn more</md-button>-->
          <!--</md-card-expand-trigger>-->
        <!--</md-card-actions>-->

        <!--<md-card-expand-content>-->
          <!--<md-card-content>-->
            <!--此处应该有说明……-->
          <!--</md-card-content>-->
        <!--</md-card-expand-content>-->
      <!--</md-card-expand>-->
    <!--</md-card>-->

    <!--<md-card>-->
      <!--<md-card-media>-->
        <!--<img src="~/static/img/appointment.jpg">-->
      <!--</md-card-media>-->

      <!--<md-card-header>-->
        <!--<div class="md-title">Create Appointment</div>-->
      <!--</md-card-header>-->

      <!--<md-card-expand>-->
        <!--<md-card-actions md-alignment="space-between">-->
          <!--<div>-->
            <!--<md-button v-on:click="onPress('appointmentCreate')">Launch</md-button>-->
          <!--</div>-->

          <!--<md-card-expand-trigger>-->
            <!--<md-button>Learn more</md-button>-->
          <!--</md-card-expand-trigger>-->
        <!--</md-card-actions>-->

        <!--<md-card-expand-content>-->
          <!--<md-card-content>-->
            <!--此处应有操作说明……-->
          <!--</md-card-content>-->
        <!--</md-card-expand-content>-->
      <!--</md-card-expand>-->
    <!--</md-card>-->
  </div>
  <div v-else>
    <home-header></home-header>
    <home-body :homeData="homeData"></home-body>
  </div>
</div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  import HomeHeader from '@/components/homeHeader';
  import HomeBody from '@/components/HomeBody';
  import constant from '@/utils/constant';
  import * as types from '@/store/mutation-types';
  export default {
    name: 'CardExpansion',
    data:function(){
      return {
        homeData:{
          top:{
            key:constant.homeNav.APPOINTMENT_LIST,
            description:'Appointment List',
          },//appointmentList
          bottom:{
            key:constant.homeNav.APPOINTMENT_CREATE,
            description:'Create Appointment',
          },//appointmentCreate
          left:{
            key:constant.homeNav.OPPORTUNITY_LIST,
            description:'Opportunity List',
          },//Opportunity list
          right:{
            key:constant.homeNav.OPPORTUNITY_CREATE,
            description:'Create Opportunity',
          },//Opportunity create
          pre:{
            key:constant.homeNav.BUSINESS_CARD_SCAN,
            description:'Business Card Scan',
          },//Business Card scan
          back:{
            key:constant.homeNav.MORE,
            description:'More...',
          }//more function
        }
      }
    } ,
    computed:{
      ...mapState([ 'isNewHome']),
    },
    components: {
      HomeHeader,
      HomeBody
    },
    methods: {
      onPress(navName) {
        this.$router.push({
          name: navName
        });
      },
      Change(){
        this.$store.commit(types.CHANGE_HOME_PAGE);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 1rem;
    margin-right:0;
    display: inline-block;
    vertical-align: top;
  }
</style>
