import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/NewHome';
// import utils from '@/utils/utils';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial)

const AppointmentList = () => import('@/views/appointmentList' /* webpackChunkName:"appointment-list" */);
const AppointmentDetail = () => import('@/views/appointmentDetail' /* webpackChunkName:"appointment-detail" */);
const AppointmentCreate = () => import('@/views/createAppointment' /* webpackChunkName:"appointment-create" */);
const AppointmentEdit = () => import('@/views/editAppointment' /* webpackChunkName:"appointment-edit" */);
const OpportunityList = () => import('@/views/OpportunityList' /* webpackChunkName:"appointment-list" */);
const OpportunityDetail = () => import('@/views/OpportunityDetail' /* webpackChunkName:"appointment-detail" */);
const OpportunityCreate = () => import('@/views/CreateOpportunity' /* webpackChunkName:"appointment-create" */);
const OpportunityEdit = () => import('@/views/EditOpportunity' /* webpackChunkName:"appointment-edit" */);
Vue.use(Router);

const router = new Router({
  goBack: function () {
    this.isBack = true;
    window.history.go(-1);
  },
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/appointment/',
      component: AppointmentList,
      name: 'appointmentList',
    },
    {
      name: 'appointmentCreate',
      path: '/appointment/create',
      component: AppointmentCreate
    },
    {
      name: 'appointmentDetail',
      path: '/appointment/:id/detail',
      component: AppointmentDetail,
    },
    {
      name: 'editAppointment',
      path: '/appointment/:id/edit',
      component: AppointmentEdit
    },
    {
      path: '/opportunity/',
      component: OpportunityList,
      name: 'OpportunityList',
    },
    {
      name: 'OpportunityCreate',
      path: '/opportunity/create',
      component: OpportunityCreate
    },
    {
      name: 'OpportunityDetail',
      path: '/opportunity/:id/detail',
      component: OpportunityDetail,
    },
    {
      name: 'editOpportunity',
      path: '/opportunity/:id/edit',
      component: OpportunityEdit
    }
  ],
});


// router.beforeEach((to, from, next) => {
//   // save site features form url query to state
//   if (!store.state.isLoading &&
//       !store.getters.isLoggedIn &&
//       !utils.anonymousRoutes().includes(to.name)
//     ) {
//     store.commit(types.STORE_ROUTE, to);
//     next({ name: 'login' });
//   } else if (to.meta.permissions || to.meta.features) {
//     // checkout if this route need feature enabled
//     if (to.meta.features && !to.meta.features.every(
//       store.getters.isSiteFeatureEnabled
//     )) {
//       next({ name: 'main' });
//     } else if (store.state.isLoading) {
//       store.commit(types.STORE_ROUTE, to);
//       next(false);
//     } else if (to.meta.permissions.every(store.getters.checkPermissions)) {
//       next();
//     } else {
//       next({ name: 'main' });
//     }
//   } else {
//     next();
//   }
// });

export default router;
