
<template>
  <div>
    <form novalidate class="md-layout md-alignment-center-center" @submit.prevent="validateOpportunity">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Opportunity Create</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="document-type">Document Type</label>
                <md-select name="document-type" id="document-type" v-model="form.documentType" md-dense
                           :disabled="sending">
                  <md-option></md-option>
                  <md-option value="OPPT">Opportunity</md-option>
                  <md-option value="0001">ZOPP</md-option>
                  <md-option value="0002">Z1</md-option>
                  <md-option value="0003">ZUK</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="name"> Name</label>
                <md-input name="name" id="name" autocomplete="family-name" v-model="form.name"
                          :disabled="sending" required/>
                <span class="md-error" v-if="!$v.form.name.required">The name is required</span>
                <span class="md-error" v-else-if="!$v.form.name.minlength">Invalid name</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('account')">
                <label for="account"> Account </label>
                <md-input name="account" id="account" v-model="form.account"
                          :disabled="sending" required/>

                <md-button class="md-icon-button md-primary" @click="showAccountDialog=true">
                  <md-icon>list</md-icon>
                </md-button>

                <span class="md-error" v-if="!$v.form.account.required">The account is required</span>
                <span class="md-error" v-else-if="!$v.form.account.minlength">Invalid account</span>
              </md-field>
            </div>

           <!-- <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('primaryContact')">
                <label for="primary-contact"> Primary Contact </label>
                <md-input name="primary-contact" id="primary-contact" v-model="form.primaryContact"
                          :disabled="sending"/>
                <md-button class="md-icon-button md-primary" @click="showContactDialog=true">
                  <md-icon>list</md-icon>
                </md-button>
              </md-field>
            </div>-->
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('source')">
                <label for="source"> Source </label>
                <md-select name="source" id="source" v-model="form.source" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="003">Campaign</md-option>
                  <md-option value="007">Deal Registration</md-option>
                  <md-option value="002">External partner</md-option>
                  <md-option value="005">Roadshow</md-option>
                  <md-option value="004">Telephone inquiry</md-option>
                  <md-option value="001">Trade fair</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('priority')">
                <label for="priority"> Priority </label>
                <md-select name="priority" id="priority" v-model="form.priority" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="1">Immediate</md-option>
                  <md-option value="7">Low</md-option>
                  <md-option value="3">Normal</md-option>
                  <md-option value="2">Urgent</md-option>
                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-datepicker v-model="form.startDate">
                <label>Start Date</label>
              </md-datepicker>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-datepicker v-model="form.endDate">
                <label>End Date</label>
              </md-datepicker>
            </div>
          </div>


          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-switch id="publish-to-forecast" v-model="form.publishToForecast" class="md-primary">Publish To Forecast</md-switch>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('forecastCategory')">
                <label for="forecast-category"> Forecast Category </label>
                <md-select name="forecast-category" id="forecast-category" v-model="form.forecastCategory" md-dense :disabled="sending" required>
                  <md-option></md-option>
                  <md-option value="3">Best Case</md-option>
                  <md-option value="2">Committed</md-option>
                  <md-option value="1">Pipeline</md-option>
                </md-select>
                <span class="md-error" v-if="!$v.form.category.required">The forecast category is required</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('category')">
                <label for="category"> Category </label>
                <md-select name="category" id="category" v-model="form.category" md-dense :disabled="sending" required>
                  <md-option></md-option>
                  <md-option value="0026">Prospect for Consulting</md-option>
                  <md-option value="0023">Prospect for Product Sales</md-option>
                  <md-option value="0024">Prospect for Service</md-option>
                  <md-option value="0025">Prospect for Training</md-option>
                </md-select>
                <span class="md-error" v-if="!$v.form.category.required">The category is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('owner')">
                <label for="owner"> Owner</label>
                <md-input name="owner" id="owner" autocomplete="owner" v-model="form.owner"
                          :disabled="sending" required/>
                <md-button class="md-icon-button md-primary" @click="showOwnerDialog=true">
                  <md-icon>list</md-icon>
                </md-button>
                <span class="md-error" v-if="!$v.form.owner.required">The owner is required</span>
              </md-field>
            </div>
          </div>

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="opportunitySaved">The opportunity {{ form.name }} was successfully created!</md-snackbar>
    </form>

    <div>
      <md-dialog :md-active.sync="showOwnerDialog">
        <md-dialog-title>Owners</md-dialog-title>
        <md-table v-model="ownerList" md-card @md-selected="onOwnerSelect">
          <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single">
            <md-table-cell md-label="Name" md-sort-by="id" md-numeric>{{ item.name }}</md-table-cell>
            <md-table-cell md-label="ID" md-sort-by="name">{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Last Name" md-sort-by="email">{{ item.lastName }}</md-table-cell>
  <!--          <md-table-cell md-label="Middle Name" md-sort-by="gender">{{ item.middleName }}</md-table-cell>-->
            <md-table-cell md-label="First Name" md-sort-by="title">{{ item.firstName }}</md-table-cell>
            <md-table-cell md-label="Job" md-sort-by="title">{{ item.job }}</md-table-cell>
            <md-table-cell md-label="Manager" md-sort-by="title">{{ item.manager }}</md-table-cell>
 <!--           <md-table-cell md-label="Business Partner ID" md-sort-by="title">{{ item.businessPID }}</md-table-cell>-->
            <md-table-cell md-label="Department" md-sort-by="title">{{ item.department }}</md-table-cell>
            <md-table-cell md-label="Address" md-sort-by="title">{{ item.address }}</md-table-cell>
            <md-table-cell md-label="Email" md-sort-by="title">{{ item.email }}</md-table-cell>
<!--            <md-table-cell md-label="Status" md-sort-by="title">{{ item.status }}</md-table-cell>-->
          </md-table-row>
        </md-table>
        <md-dialog-actions>
          <md-button class="md-primary" @click="showOwnerDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>

    </div>

    <div>
      <md-dialog :md-active.sync="showAccountDialog">
        <md-dialog-title>Accounts</md-dialog-title>
        <md-table v-model="accountList" md-card @md-selected="onAccountSelect">
          <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single">
            <md-table-cell md-label="Account ID" md-sort-by="id" md-numeric>{{ item.AccountID }}</md-table-cell>
            <md-table-cell md-label="Account Name" md-sort-by="name">{{ item.AccountName }}</md-table-cell>
            <md-table-cell md-label="Street" md-sort-by="email">{{ item.streetName}}</md-table-cell>
            <md-table-cell md-label="Role" md-sort-by="title">{{ item.RoleCodeText }}</md-table-cell>
          </md-table-row>
        </md-table>
        <md-dialog-actions>
          <md-button class="md-primary" @click="showAccountDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>

    </div>


    <div>
      <md-dialog :md-active.sync="showContactDialog">
        <md-dialog-title>Contact</md-dialog-title>
        <md-table v-model="contactList" md-card @md-selected="onContactSelect">
          <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single">
            <md-table-cell md-label="Contact ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Contact Name" md-sort-by="name">{{ item.contactName }}</md-table-cell>
            <md-table-cell md-label="Account Name" md-sort-by="email">{{ item.accountName }}</md-table-cell>
            <md-table-cell md-label="Department" md-sort-by="title">{{ item.department }}</md-table-cell>
            <md-table-cell md-label="Phone" md-sort-by="title">{{ item.phone }}</md-table-cell>
            <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.jobTitle }}</md-table-cell>
            <md-table-cell md-label="Email" md-sort-by="title">{{ item.email }}</md-table-cell>
          </md-table-row>
        </md-table>
        <md-dialog-actions>
          <md-button class="md-primary" @click="showContactDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>

    </div>


  </div>
</template>
<script src="../control/CreateOpportunity.js"></script>
<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
