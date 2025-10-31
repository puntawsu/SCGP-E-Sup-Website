<template>
  <div class="row SingleNews">
    <div class="news-col col-12 col-md-6">
      <div class="news-img">
        <img :src="item.img" alt="" />
      </div>
    </div>
    <div class="news-col col-12 col-md-6 flex-column">
      <div class="news-content">
        <h3>{{ item.id + item.title }}</h3>
        <div class="news-meta">
          <span>{{ item.date }}</span
          ><br />
          <p>{{ item.desc }}</p>
        </div>
      </div>
      <div class="news-btn-zone">
        <div class="news-btn">
          <a>    {{ $t("MoreDetails") }} </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
    team_p: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
