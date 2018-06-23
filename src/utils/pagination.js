import * as types from '@/store/mutation-types';

const initPageniation = {
  per_page: 10,
  page: 1,
  next: null,
  prev: null,
  total_count: 0,
  total_pages: 0
};

const initialState = {
  isLoadingPagination: false,
};

const initialMutations = moduleInitPageniation => ({
  [types.LOAD_PAGINATION](context) {
    context.isLoadingPagination = true;
  },
  [types.LOAD_PAGINATION_DONE](context) {
    context.isLoadingPagination = false;
  },
  [types.EXTRACT_PAGINATION_DATA](context, meta = {}) {
    context.pagination = meta.pagination || {
      ...moduleInitPageniation
    };
  },
  [types.RESET_PAGINATION](context) {
    context.isLoadingPagination = false;
    context.pagination = {
      ...moduleInitPageniation
    };
  }
});

const initialGtters = {
  hasNext: state => !!state.pagination.next,
  hasPrev: state => !!state.pagination.prev,
  totalCount: state => state.pagination.total_count,
  totalPages: state => state.pagination.total_pages,
  isLoadingPagination: state => state.isLoadingPagination
};

const paginate = (pagination = {}) => {
  const moduleInitPageniation = {
    ...initPageniation,
    ...pagination
  };
  return (module) => {
    let { state, mutations, getters } = module;
    state = {
      ...initialState,
      pagination: moduleInitPageniation,
      ...state
    };
    getters = {
      ...initialGtters,
      ...getters
    };
    mutations = {
      ...initialMutations(moduleInitPageniation),
      ...mutations
    };
    return {
      ...module,
      state,
      getters,
      mutations
    };
  };
};

export default paginate;
