// plugins/vuex.ts
import { defineNuxtPlugin } from '#app';
import { createStore } from 'vuex';
import { Store } from 'vuex';

const store = createStore({
 state: {
  isModalOpen: false,
 },
 mutations: {
  openModal(state) {
   state.isModalOpen = true;
  },
  closeModal(state) {
   state.isModalOpen = false;
  },
 },
 actions: {
  openModal({ commit }) {
   commit('openModal');
  },
  closeModal({ commit }) {
   commit('closeModal');
  },
 },
});

export default defineNuxtPlugin((nuxtApp) => {
 nuxtApp.vueApp.use(store);
 nuxtApp.provide('store', store);
});
