<template>
  <div class="card-expansion">
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
    <md-card>
      <md-card-media>
        <img src="~/static/img/appointment.jpg">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Appointment List</div>
        <!--<div class="md-subhead">My opportunities</div>-->
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button v-on:click="onPress('appointmentList')">Launch</md-button>
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
        <img src="~/static/img/appointment.jpg">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Create Appointment</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button v-on:click="onPress('appointmentCreate')">Launch</md-button>
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
  </div>
</template>

<script>
  export default {
    name: 'CardExpansion',
    methods: {
      onPress(navName) {
        this.$router.push({
          name: navName
        });
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
