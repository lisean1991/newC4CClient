<template>
  <div>
    <div id='home' class="homePage">
      <v-tile   v-for="tile in tiles"
              v-bind:key="tile.key"
              v-bind:id="tile.key"
              v-bind:title="tile.title"
              v-bind:count="tile.count"
              v-on:press="onPress">
      </v-tile>
    </div>
  </div>
</template>

<script>
  import VTile from '@/components/tile';
  export default {
    data:function(){
      return {
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
