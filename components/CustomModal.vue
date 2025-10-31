<!-- components/CustomModal.vue -->
<template>
  <transition
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
    <div id="CustomModal">
      <div
        v-if="isModalOpen"
        class="modal-backdrop"
        @click="handleBackdropClick">
        <div class="modal-content" @click.stop>
          <div class="header">
            <button @click="closeModal">X</button>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isModalOpen = computed(() => store.state.isModalOpen);

const closeModal = () => {
  store.dispatch("closeModal");
};

const handleBackdropClick = () => {
  closeModal();
};

// Optional: Add transition handlers if needed
const beforeEnter = (el) => {
  el.style.opacity = 0;
};

const enter = (el, done) => {
  el.offsetHeight; // trigger reflow
  el.style.transition = "opacity 0.5s";
  el.style.opacity = 1;
  done();
};

const leave = (el, done) => {
  el.style.transition = "opacity 0.5s";
  el.style.opacity = 0;
  done();
};
</script>

<style scoped></style>
