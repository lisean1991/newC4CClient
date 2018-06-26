<template>
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">营养</h1>
      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <md-table md-sort="dessert" md-sort-type="desc" @select="onSelect" @sort="onSort">
      <md-table-header>
        <md-table-row>
          <md-table-head md-sort-by="dessert">甜点 (100g 装)</md-table-head>
          <md-table-head md-sort-by="calories" md-numeric md-tooltip="总能量与净含量">大卡 (g)</md-table-head>
          <md-table-head md-sort-by="fat" md-numeric>脂肪 (g)</md-table-head>
          <md-table-head md-sort-by="carbs" md-numeric>气体 (g)</md-table-head>
          <md-table-head md-sort-by="protein" md-numeric>蛋白质 (g)</md-table-head>
          <md-table-head>
            <md-icon>message</md-icon>
            <span>备注</span>
          </md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
          <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'dessert' && columnIndex !== 'comment'" v-if="columnIndex !== 'type'">
            <md-table-edit
              :md-name="'comment' + columnIndex"
              :md-id="'comment' + columnIndex"
              md-placeholder="Add a comment"
              md-maxlength="120"
              v-model="nutrition[rowIndex].comment"
              v-if="columnIndex === 'comment'"></md-table-edit>

            <span v-if="columnIndex !== 'comment'"></span>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <md-table-pagination
      md-size="10"
      md-total="5"
      md-page="1"
      md-label="Rows"
      md-separator="of"
      :md-page-options="[5, 10, 25, 50]"
      @pagination="onPagination"></md-table-pagination>
  </md-table-card>
</template>

<script>
export default {
data: () => ({
nutrition: [
  {
  dessert: '霜冻优格',
  type: 'ice_cream',
  calories: '159',
  fat: '6.0',
  carbs: '24',
  protein: '4.0',
  comment: '冷冻'
  },
  {
  dessert: '冰淇淋三明治',
  type: 'ice_cream',
  calories: '237',
  fat: '9.0',
  carbs: '37',
  protein: '4.3',
  comment: '好吃'
  },
  {
  dessert: '泡芙',
  type: 'pastry',
  calories: '262',
  fat: '16.0',
  carbs: '24',
  protein: '6.0',
  comment: ''
  },
  {
  dessert: '纸杯蛋糕',
  type: 'pastry',
  calories: '305',
  fat: '3.7',
  carbs: '67',
  protein: '4.3',
  comment: ''
  },
  {
  dessert: '姜饼',
  type: 'other',
  calories: '356',
  fat: '16.0',
  carbs: '49',
  protein: '3.9',
  comment: ''
  }
  ],
  selectedData: [],
  sort: {},
  page: {}
  }),
methods: {
onSelect(data) {
this.selectedData = data;
this.$forceUpdate();
},
onSort(sort) {
this.sort = sort;
},
onPagination(page) {
this.page = page;
}
}
};
</script>
