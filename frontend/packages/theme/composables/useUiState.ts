import Vue from 'vue';
import VueCompositionAPI, { reactive, computed } from '@vue/composition-api';

// We need to register it again because of Vue instance instantiation issues
Vue.use(VueCompositionAPI);

const state = reactive({
  isCartSidebarOpen: false,
  isWishlistSidebarOpen: false,
  isLoginModalOpen: false,
  isListingModalOpen: false,
  currentListing: null,
  isCategoryGridView: true,
  isFilterSidebarOpen: false
});

const useUiState = () => {
  const isCartSidebarOpen = computed(() => state.isCartSidebarOpen);
  const toggleCartSidebar = () => {
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };

  const isWishlistSidebarOpen = computed(() => state.isWishlistSidebarOpen);
  const toggleWishlistSidebar = () => {
    state.isWishlistSidebarOpen = !state.isWishlistSidebarOpen;
  };

  const isLoginModalOpen = computed(() => state.isLoginModalOpen);
  const toggleLoginModal = () => {
    state.isLoginModalOpen = !state.isLoginModalOpen;
  };

  const isListingModalOpen = computed(() => state.isListingModalOpen);
  const currentListing = computed(() => state.currentListing);
  const toggleListingModal = (product) => {
    state.isListingModalOpen = !state.isListingModalOpen;
    if (!state.isListingModalOpen) {
      state.currentListing = null;
    } else {
      state.currentListing = product;
    }
  };

  const isCategoryGridView = computed(() => state.isCategoryGridView);
  const changeToCategoryGridView = () => {
    state.isCategoryGridView = true;
  };
  const changeToCategoryListView = () => {
    state.isCategoryGridView = false;
  };

  const isFilterSidebarOpen = computed(() => state.isFilterSidebarOpen);
  const toggleFilterSidebar = () => {
    state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
  };

  return {
    isCartSidebarOpen,
    isWishlistSidebarOpen,
    isLoginModalOpen,
    isListingModalOpen,
    currentListing,
    isCategoryGridView,
    isFilterSidebarOpen,
    toggleCartSidebar,
    toggleWishlistSidebar,
    toggleLoginModal,
    toggleListingModal,
    changeToCategoryGridView,
    changeToCategoryListView,
    toggleFilterSidebar
  };
};

export default useUiState;
