<template>
  <div class="accordion-item">
   
    <h2 class="accordion-header" :id="`heading${item.id}`"> 
      <button
        :class="` accordion-button ${menu==item.id ? '' : 'collapsed'}`"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapse${item.id}`"
        :aria-expanded="`${menu==item.id ? 'true' : 'false'}`"
        @click.native="click"
        :aria-controls="`collapse${item.id}`">
        {{ item.title }}
        <span class="accordion-btn"></span>
        
      </button>
        <span class="background-right"></span>
    </h2>
    <div
      :id="`collapse${item.id}`"
      :class="`accordion-collapse collapse ${menu==item.id ? 'show' : ''}`"
      :aria-labelledby="`heading${item.id}`"
      :data-bs-parent="`#${parentId}`">
      <div class="accordion-body">
        <div class="row">
          <div
          :class="list.text ? 'dot':''"
            class=" list-weProcure col-xxl-4 col-md-4 col-sm-6 col-6"
            v-for="(list, i) in item.list"
            :key="i"
            :item="list.text">
            <p>{{ list.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    parentId: {
      type: String,
      required: true,
    },
    menu: {
      type: Number,
      required: true,
    },
  },
  methods: {
    click() {

      this.$emit("emtit-click", this.item.id);

      
    },
  },
};
</script>
