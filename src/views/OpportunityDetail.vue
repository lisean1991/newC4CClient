<template>
  <div id="page">
    <div class = "page-container">
      <div class="header-line">
      <div class="container-header">Opportunity {{selectOpportunity.OpportunityID}}</div>
      <div class="header-action">
        <md-button v-on:click="onEdit">
          <md-icon>edit</md-icon>
          <md-tooltip md-direction="top">Edit</md-tooltip>
        </md-button>
        <md-button v-on:click="backHome">
          <md-icon>arrow_back</md-icon>
          <md-tooltip md-direction="top">Go Back</md-tooltip>
        </md-button>
      </div>
      </div>
      <!-- OVERVIEW -->
      <div class="overview-container container">

        <div class="overview-header header">
          <span>Overview</span>
        </div>
        <div>
          <md-steppers>
            <md-step id="first" md-label="Identify Opportunity">
            </md-step>

            <md-step id="second" md-label="Qualify Opportunity">
            </md-step>

            <md-step id="third" md-label="Develop value proposition">
            </md-step>

            <md-step id="fourth" md-label="Quotation">
            </md-step>

            <md-step id="fifth" md-label="Decision">
            </md-step>

            <md-step id="sixth" md-label="Close">
            </md-step>
          </md-steppers>
        </div>
        <div class="overview">
          <div class="overview-left">
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
          </div>
          <div class="overview-right">
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
      </div>

      <!-- sales team -->
      <div class="party-container container">
        <div class="party-header header">
          <span>Sales Team({{selectOpportunity.OpportunitySalesTeam.length}})</span>
        </div>
        <div class="parties">
          <div class="party" v-for="team in selectOpportunity.OpportunitySalesTeam">
            <div class="party-left">
              <div class="party-info">
                <div class="name">{{team.FormattedName.content}}</div>
                <div class="role">{{team.RoleCodeText}}</div>
              </div>
            </div>
            <div class="party-right">
              <div class="detail">
                <div class="link detail-email">{{team.EMail}}</div>
                <div class="detail-phone">{{team.Phone}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product -->
      <div class="product-container container">
        <div class="product-header header">
          <span>Product({{selectOpportunity.OpportunityProduct.length}})</span>
        </div>
        <div class="products">
          <div class="product" v-for="product in selectOpportunity.OpportunityProduct">
              <div class="ID">{{product.ProductID}}</div>
              <div class="Description">{{product.ProductDescription.content}}</div>
              <div class="Price">{{product.ProposedValue.content}}{{product.ProposedValue.currencyCode}}</div>
              <div class="Quantity">{{product.Quantity.content}}{{product.Quantity.unitCode}}</div>
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
