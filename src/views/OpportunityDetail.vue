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
              {{selectOpportunity.Name.content}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Status
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.StatusCodeText}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Account
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.AccountName.content}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Primary Contact
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.PrimaryContactName.content}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Priority
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.PriorityCodeText}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Probability Percent
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.ProbabilityPercent}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Expected Value
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.ExpectedValue.content}} {{selectOpportunity.ExpectedValue.currencyCode}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Weighted Value
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.WeightedValue.content}} {{selectOpportunity.WeightedValue.currencyCode}}
            </div>
          </div>
          <div class="overview-content">
            <div class="overview-name">
              Total Negotiated Value
            </div>
            <div class="overview-descrption">
              {{selectOpportunity.TotalNegotiatedValue.content}} {{selectOpportunity.TotalNegotiatedValue.currencyCode}}
            </div>
          </div>
        </div>
      </div>

      <!-- Involved party -->
      <div class="party-container container">
        <div class="party-header header">
          <span>INVOLVED PARTIES({{selectOpportunity.OpportunityInvolvedParties.length}})</span>
        </div>
        <div class="parties">
          <div class="party" v-for="party in selectOpportunity.OpportunityInvolvedParties">
            <div class="party-left">
              <div class="party-info">
                <div class="name">{{party.Name.content}}</div>
                <div class="role">{{party.RoleCodeText}}</div>
              </div>
            </div>
            <div class="party-right">
              <div class="detail">
                <div class="link detail-email">{{party.EMail}}</div>
                <div class="detail-phone">{{party.Phone}}</div>
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
