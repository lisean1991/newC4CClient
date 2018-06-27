<template>
  <div id="page">
    <div class = "page-container">
      <div class="header-line">
      <div class="container-header">Opportunity {{selectOpportunity.OpportunityID}}</div>
      <div class="header-action">
        <md-button v-on:click="onEdit">
          <md-icon>edit</md-icon>
        </md-button>
        <md-button v-on:click="backHome">
          <md-icon>home</md-icon>
        </md-button>
      </div>
      </div>
      <!-- OVERVIEW -->
      <div class="overview-container container">

        <div class="overview-header header">
          <span>Overview</span>
        </div>
        <div class="overview">
          <div class="overview-content">
            <div class="overview-name">
              Subject
            </div>
            <div class="overview-descrption">
              Test Appointment
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Status
            </div>
            <div class="overview-descrption">
              Open
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Account
            </div>
            <div class="overview-descrption">
              IKEA
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Primary Contact
            </div>
            <div class="overview-descrption">
              Sean Li
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Location
            </div>
            <div class="overview-descrption">
              四川成都武侯祠大街231号 / CN
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Start Date/Time
            </div>
            <div class="overview-descrption">
              19.03.2018 4:00 PM
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              End Date/Time
            </div>
            <div class="overview-descrption">
              19.03.2018 4:30 PM
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Category
            </div>
            <div class="overview-descrption">
              Customer Visit
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Priority
            </div>
            <div class="overview-descrption">
              High
            </div>
          </div>
        </div>
      </div>

      <!-- Involved party -->
      <div class="party-container container">
        <div class="party-header header">
          <span>INVOLVED PARTIES(3)</span>
        </div>
        <div class="parties">
          <div class="party">
            <div class="party-left">
              <div class="party-info">
                <div class="name">Michael</div>
                <div class="role">Organizer</div>
              </div>
            </div>
            <div class="party-right">
              <div class="detail">
                <div class="link detail-email">michael@qq.com</div>
                <div class="detail-phone">13300002222</div>
              </div>
            </div>
          </div>
          <div class="party">
            <div class="party-left">
              <div class="party-info">
                <div class="name">David</div>
                <div class="role">Contact</div>
              </div>
            </div>
            <div class="party-right">
              <div class="detail">
                <div class="link detail-email">david@qq.com</div>
                <div class="detail-phone">13300003333</div>
              </div>
            </div>
          </div>
          <div class="party">
            <div class="party-left">
              <div class="party-info">
                <div class="name">Max</div>
                <div class="role">Employee Responsible</div>
              </div>
            </div>
            <div class="party-right">
              <div class="detail">
                <div class="link detail-email">max@qq.com</div>
                <div class="detail-phone">13300004444</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, 0.12);
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  export default {
    name: "Waterfall",
    data: () => ({

    }),
    computed:{
      ...mapGetters(['selectOpportunity']),
    },
    methods:{
      onEdit: function(){

      },
      backHome: function(){
        window.history.go(-1);
      },
    }
  };
</script>
