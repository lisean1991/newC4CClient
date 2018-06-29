<template>
  <div id="page">
    <div class="loading-container" v-if="isLoadingPage">
       <!-- <loading-icon></loading-icon> -->
      <hot-heart></hot-heart>
    </div>
    <div class = "page-container">
      <div class="header-line">
      <div class="container-header">Opportunity {{selectOpportunity.OpportunityID}}</div>
      <div class="header-action">
        <md-button v-on:click="onEdit" v-if="!editMode">
          <md-icon>edit</md-icon>
          <md-tooltip md-direction="top">Edit</md-tooltip>
        </md-button>
        <md-button v-on:click="onSave" v-if="editMode">
          <md-icon>check</md-icon>
          <md-tooltip md-direction="top">Edit</md-tooltip>
        </md-button>
        <md-button v-on:click="onCancel" v-if="editMode">
          <md-icon>close</md-icon>
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
        <ul class="stepNav sixWide" >
          <li id = "001" :class="{'selected':this.selectOpportunity.SalesPhaseCode==='001'}"><a href="#" style='text-decoration:none;'>Identify Opportunity</a></li>
          <li id = "002" :class="{'selected':this.selectOpportunity.SalesPhaseCode==='002'}"><a href="#" style='text-decoration:none;'>Qualify Opportunity</a></li>
          <li id = "003" :class="{'selected':this.selectOpportunity.SalesPhaseCode==='003'}"><a href="#" style='text-decoration:none;'>Develop value proposition</a></li>
          <li id = "004" :class="{'selected':this.selectOpportunity.SalesPhaseCode==='004'}"><a href="#" style='text-decoration:none;'>Quatotation</a></li>
          <li id = "005" :class="{'selected':this.selectOpportunity.SalesPhaseCode==='005'}"><a href="#" style='text-decoration:none;'>Decision</a></li>
          <li id = "006" :class="{'selected':this.selectOpportunity.SalesPhaseCode==='006'}"><a href="#" style='text-decoration:none;'>Close</a></li>
        </ul>
        <div class="overview">
          <div class="overview-left">
          <div class="overview-content">
            <div class="overview-name">
              Subject
            </div>
            <div class="overview-descrption" v-if="!editMode">
              {{selectOpportunity.Name.content}}
            </div>
            <div class="overview-descrption" v-else>
              <input  v-model="subject"></input>
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
  import HotHeart from '@/components/HotHeart';
  export default {
    name: "Waterfall",
    data: () => ({
      editMode:false,
      subject:""
    }),
    components: {
      HotHeart
    },
    computed:{
      ...mapGetters(['selectOpportunity']),
      ...mapState([ 'isLoadingPage']),
    },
    methods:{
      ...mapActions(['loadPage', 'loadPageDone','updateOpportunity']),
      onEdit: function(){
        this.subject = this.selectOpportunity.Name.content;
        this.editMode = true;
      },
      async onSave() {
          this.loadPage();
          var dat = this.selectOpportunity;
          dat.Name.content = this.subject;
          await this.updateOpportunity({
            // oData:{
            //   Name:{
            //     content:this.subject
            //   }
            // },
            oData:dat,
            ObjectID: this.selectOpportunity.ObjectID

          });
          this.editMode = false;
          this.loadPageDone();
          console.log(this.subject);

      },
      onCancel(){
        this.editMode = false;
      },
      backHome(){
        window.history.go(-1);
      },

    }
  };
</script>
