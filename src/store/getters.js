import _ from 'lodash';

const isDC = (state) => {
  if (typeof state.currentMember.role !== 'string') {
    return false;
  }
  return state.currentMember.role.startsWith('prod');
};

const isDemo = (state) => {
  if (typeof state.currentMember.role !== 'string') {
    return false;
  }
  return state.currentMember.role.startsWith('demo');
};

const isTestInstance = state => state.network.is_test;

const isDCInstance = state => state.network.is_prod;

const isDemoInstance = state => state.network.is_demo;

const isIE = () => window.navigator.userAgent.indexOf('Trident') !== -1;

const isLoggedIn = state => !_.isEmpty(state.currentMember);

const csrfToken = state => state.currentMember.csrf_token;

const siteBrand = (state, getters) => {
  let brand = '';
  if (getters.isDC) {
    brand = 'Production';
  } else if (getters.isDemo) {
    brand = 'Demo';
  }
  return brand;
};

const permissions = (state) => {
  const perms = {};
  _.forEach(state.currentMember.permissions, (group, key) => {
    const permissionGroup = {};
    group.forEach((permission) => {
      permissionGroup[permission] = true;
    });
    perms[key] = permissionGroup;
  });
  return perms;
};

const checkPermissions = (state, getters) => path => _.get(getters.permissions, path);

const isScrollBottom = state => state.scrollHeight - (state.windowHeight + state.scrollTop) < 60;

const isScrollTop = state => state.scrollTop === 0;

const isSiteFeatureEnabled = state => featureName => !!state.siteFeatures[featureName];

export default {
  isIE,
  isDC,
  isDemo,
  isLoggedIn,
  csrfToken,
  siteBrand,
  permissions,
  checkPermissions,
  isScrollBottom,
  isScrollTop,
  isTestInstance,
  isDCInstance,
  isDemoInstance,
  isSiteFeatureEnabled
};
