<template>
  <div>
    <home-header></home-header>
    <home-body :homeData="homeData"></home-body>
    <!-- <div id='home' class="homePage">
      <v-tile   v-for="tile in tiles"
              v-bind:key="tile.key"
              v-bind:id="tile.key"
              v-bind:title="tile.title"
              v-bind:count="tile.count"
              v-on:press="onPress">
      </v-tile>
    </div> -->
  </div>
</template>

<script>
  import VTile from '@/components/tile';
  import HomeHeader from '@/components/homeHeader';
  import HomeBody from '@/components/HomeBody';
  import constant from '@/utils/constant';
  import { mapActions, mapGetters } from 'vuex';

  export default {
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
        },
        tiles:[
          {
            key:"display",
            title:"My Appointment",
            count: 12
          },
          {
            key:"create",
            title:"Create Appointment",
            count: 0
          }
        ]
      }
    } ,
    components: {
      HomeHeader,
      HomeBody,
      VTile
    },
    methods:{
      onPress:function(id){
        switch (id) {
          case "display":
            this.$router.push({
                name: 'appointmentList'
              });
            break;
          case "create":
            this.$router.push({
                name: 'appointmentCreate'
              });
            break;
          default:
        }
      }

    }

  }
</script>
