<template>
  <LayoutOne>
    <HeaderSubPage1 :headData="headData" />
  </LayoutOne>
</template>

<script>
import LayoutOne from "~/layouts/LayoutOne.vue";
import HeaderSubPage1 from "~/components/header/HeaderSubPage1.vue";

export default {
  data() {
    return {
      headData: {
        
        title: "GeneralProcedure",
      },
    };
  },
  components: { LayoutOne, HeaderSubPage1 },
};
</script>
