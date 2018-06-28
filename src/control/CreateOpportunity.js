//import { validationMixin } from 'vuelidate';
import { mapActions, mapGetters, mapState  } from 'vuex';
// import {
//   required,
//   email,
//   minLength,
//   maxLength
// } from 'vuelidate/lib/validators';

export default {
  name: 'FormValidation',
//  mixins: [validationMixin],
  data: () => ({
    showOwnerDialog: false,
    showAccountDialog: false,
    showContactDialog: false,
    selectedOwner: {},
    selectedAccount: {},
    selectedContact: {},
    form: {
      name: null,
      gender: null,
      age: null,
      email: null,
      account: null,
      documentType: null,
      primaryContact: null,
      source: null,
      priority: null,
      startDate: null,
      endDate: null,
      publishToForecast: null,
      forecastCategory: null,
      category: null,
      owner: null
    },
    opportunitySaved: false,
    sending: false,
    lastUser: null,
    ownerList: [
      {
        name: 'Joey Yang',
        id: 1,
        lastName: 'Joey',
        middleName: '',
        firstName: 'Yang',
        job: 'Developer',
        manager: 'Jin Max',
        businessPID: '88889901',
        department: 'C4C Development',
        address: '3410 Hillview Ave / Palo Alto 94304 / US',
        email: 'joey.yang02@sap.com',
        status: 'Active'
      },
      {
        name: 'Janet Liao',
        id: 2,
        lastName: 'Janet',
        middleName: '',
        firstName: 'Liao',
        job: 'Developer',
        manager: 'Jin Max',
        businessPID: '88889902',
        department: 'C4C Development',
        address: '3410 Hillview Ave / Palo Alto 94304 / US',
        email: 'janet.liao02@sap.com',
        status: 'Active'
      },
      {
        name: 'Shuai Zhou',
        id: 3,
        lastName: 'Shuai',
        middleName: '',
        firstName: 'Zhou',
        job: 'UX designer',
        manager: 'Jin Max',
        businessPID: '88889901',
        department: 'C4C Development',
        address: '3410 Hillview Ave / Palo Alto 94304 / US',
        email: 'shuai.zhou02@sap.com',
        status: 'Active'
      },
      {
        name: 'David Wu',
        id: 4,
        lastName: 'David',
        middleName: '',
        firstName: 'Wu',
        job: 'Developer',
        manager: 'Jin Max',
        businessPID: '88889901',
        department: 'C4C Development',
        address: '3410 Hillview Ave / Palo Alto 94304 / US',
        email: 'david.wu01@sap.com',
        status: 'Active'
      }
    ],
    accountListMock: [
      {
        id: 1,
        name: 'SAP中国软件系统有限公司',
        street: '天府软件园E5',
        type: 'Customer',
        role: 'Customer',
        postCode: '611731',
        country: 'CN',
        address: '天华一路99好天府软件园B区6号楼3-4楼'
      },
      {
        id: 2,
        name: 'SAP中国软件系统有限公司成都分公司',
        street: '天府软件园E5',
        type: 'Customer',
        role: 'Customer',
        postCode: '611731',
        country: 'CN',
        address: '天华一路99好天府软件园B区6号楼3-4楼'
      },
      {
        id: 3,
        name: 'SAP中国软件系统有限公司上海分公司',
        street: '天府软件园E5',
        type: 'Customer',
        role: 'Customer',
        postCode: '611731',
        country: 'CN',
        address: '天华一路99好天府软件园B区6号楼3-4楼'
      },
      {
        id: 4,
        name: 'SAP中国软件系统有限公司大连分公司',
        street: '天府软件园E5',
        type: 'Customer',
        role: 'Customer',
        postCode: '611731',
        country: 'CN',
        address: '天华一路99好天府软件园B区6号楼3-4楼'
      },
      {
        id: 5,
        name: 'SAP中国软件系统有限公司北京分公司',
        street: '天府软件园E5',
        type: 'Customer',
        role: 'Customer',
        postCode: '611731',
        country: 'CN',
        address: '天华一路99好天府软件园B区6号楼3-4楼'
      }],
    contactList: [
      {
        id: 1,
        contactName: '郭沫若',
        accountName: 'SAP中国软件系统有限公司北京分公司',
        department: 'development',
        phone: '1000000000',
        jobTitle: 'Manager',
        email: '123fsafsa@gmail.com'
      },
      {
        id: 2,
        contactName: '鲁迅',
        accountName: 'SAP中国软件系统有限公司成都分公司',
        department: 'development',
        phone: '1000000000',
        jobTitle: 'Manager',
        email: '123fsafsa@gmail.com'
      },
      {
        id: 3,
        contactName: '胡适',
        accountName: 'SAP中国软件系统有限公司大连分公司',
        department: 'development',
        phone: '1000000000',
        jobTitle: 'Manager',
        email: '123fsafsa@gmail.com'
      },
      {
        id: 4,
        contactName: '钱学森',
        accountName: 'SAP中国软件系统有限公司海南分公司',
        department: 'development',
        phone: '1000000000',
        jobTitle: 'Manager',
        email: '123fsafsa@gmail.com'
      },
      {
        id: 5,
        contactName: '李小龙',
        accountName: 'SAP软件系统有限公司美国分公司',
        department: 'development',
        phone: '1000000000',
        jobTitle: 'Manager',
        email: '123fsafsa@gmail.com'
      }
    ]
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      forecastCategory: {
        required
      },
      category: {
        required
      },
      owner: {
        required
      },
      account: {
        required
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      gender: {
        required
      },
      email: {
        required,
        email
      }
    }
  },

  async created() {
    await this.getAccountList();
  },
  computed: {
    ...mapGetters(['accountList'])
  },
  methods: {
    ...mapActions(['getAccountList', 'createOpportunity']),
    getClass: ({ id }) => ({
      'md-primary': id === 2,
      'md-accent': id === 3
    }),
    onOwnerSelect(item) {
      this.selectedOwner = item;
      this.form.owner = this.selectedOwner.name;
      this.showOwnerDialog = false;
    },
    onAccountSelect(item) {
      this.selectedAccount = item;
      this.form.account = this.selectedAccount.AccountName;
      this.showAccountDialog = false;
    },
    onContactSelect(item) {
      this.selectedContact = item;
      this.form.primaryContact = this.selectedContact.contactName;
      this.showContactDialog = false;
    },
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset()
      this.form.name = null
      this.form.account = null
      this.form.documentType = null
      this.form.primaryContact = null
      this.form.source = null
      this.form.priority = null
      this.form.startDate = null
      this.form.endDate = null
      this.form.publishToForecast = null
      this.form.forecastCategory = null
      this.form.category = null
      this.form.owner = null;
    },
    saveOpportunity() {
      this.sending = true

      const newOpportunity = {
        Name: {
          content: this.form.name
        },
        AccountName: {
          content: this.form.account
        },
        DocumentTypeCode: this.form.documentType,
        SourceCode: this.form.source,
        StartDate: this.form.startDate.toISOString().substring(0, 18),
        CloseDate: this.form.endDate.toISOString().substring(0, 18),
        PriorityCode: this.form.priority,
        PublishToForecast: this.form.publishToForecast,
        ForecastCategoryCode: this.form.forecastCategory,
        CategoryCode: this.form.category,
        OwnerName: {
          content: this.form.owner
        }
      };

      this.createOpportunity(newOpportunity);
      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.name}`
        this.opportunitySaved = true
        this.sending = false
        this.clearForm();
      }, 1500);
    },
    validateOpportunity() {
      this.$v.$touch()
      this.saveOpportunity();

      if (!this.$v.$invalid) {
        this.saveOpportunity();
      }
    }
  }
};
