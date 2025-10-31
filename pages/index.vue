<template>
  <LayoutOne>
    <HomeBanner/>
    <!-- <HomeNews/> -->
    <HomeAbouts/>
    <HomeSupplierCodeofConduct/>
    <!-- <HomeConflictMineral/> -->
    <HomeProcurementPolicy/>
    <!-- <HomeManagingSuppliers/> -->
    <HomeWeProcure/>
    <HomeOther/>
    <!-- <HomeCounter/>
    <HomeServices/>
    <HomeEvents/>
    <HomePortfolio/>
    <HomeTestimonial/>
    <HomeBlogs/> -->
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeBanner from "~/components/home/HomeBanner.vue";
import HomeNews from "~/components/home/news/HomeNews.vue";
import HomeAbouts from "~/components/home/HomeAbouts.vue";
import HomeWeProcure from "~/components/home/HomeWeProcure.vue";
import HomeConflictMineral from "~/components/home/HomeConflictMineral.vue";
import HomeProcurementPolicy from "~/components/home/HomeProcurementPolicy.vue";
import HomeSupplierDiversity from "~/components/home/HomeSupplierDiversity.vue";
import HomeSupplierCodeofConduct from "~/components/home/HomeSupplierCodeofConduct.vue";

import HomeManagingSuppliers from "~/components/home/HomeManagingSuppliers.vue";
import HomeOther from "~/components/home/HomeOther.vue";


useHead({
  title: "Home main - Creative Agency & Portfolio Vue Nuxt 3 Template",
}); 

</script>
