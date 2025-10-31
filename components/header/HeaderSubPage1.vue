<template>
  <div
    class="header-subpage"
    :style="
      headData.banner ? { backgroundImage: `url(${headData.banner})` } : {}
    ">
           <div class="curve-zone hide-on-mobile">
                <img src="/assets/img/home/banner_0.png" />
              </div>
    <div class="header-subpage__content container">
      <!-- data-sal="slide-right"
                data-sal-delay="170"
                 data-sal-duration="1000" -->
      <h1>{{ $t(headData.title) }}</h1>
      <div class="header-subpage__breadcrumbs">
        <NuxtLink to="/">{{$t('Home')}}</NuxtLink>
        <template v-for="breadcrumbs in headData.breadcrumbs">
          <span> / </span>
          <span>{{ $t(breadcrumbs) }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {};
  },
  props: {
    headData: {
      type: Object,
      default: () => ({}), // ใช้ default เป็น function ที่คืนค่าที่ว่าง
    },
  },
  components: {},
  methods: {},
  computed: {},
  setup() {
 
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>
