<template>
  <section
    class="faq__area weProcure-area pb-40"
    id="weProcure"
    style="padding-top: 150px; margin-top: -40px"
  >
    <div class="container">
      <div class="faq__inner p-relative">
        <div class="row justify-content-center">
          <div class="col-xxl-11 col-xl-11 col-lg-11">
            <div class="faq__wrapper tp-accordion">
              <div class="title pt-40 pb-20">
                <h3>{{ $t("HomeWeProcure-Title") }}</h3>
              </div>

              <div class="accordion" id="nav-general_accordion">
                <!-- -->
                <SingleWeProcure
                  data-sal="slide-up"
                  data-sal-delay="170"
                  data-sal-duration="1000"
                  v-for="(item, i) in weProcureItems"
                  :key="i"
                  :item="item"
                  :parent-id="'nav-general_accordion'"
                  :menu="menu"
                  @emtit-click="emtitclick"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import commonFaq from "~~/mixins/commonFaq";
import SingleWeProcure from "./SingleWeProcure.vue";

export default {
  props: {
    parent_id: String,
  },
  components: {
    SingleWeProcure,
  },
  data() {
    return {
      weProcureItems: [
        {
          id: 1,
          title: "Chemical",
          show: false,
          parent: "nav-general_accordion",
          list: [
            { text: "Pulping & bleaching chemicals" },
            { text: "Deinking chemicals" },
            { text: "Scale control" },
            { text: "Deposit control" },
            { text: "Pitch control" },
            { text: "Sticky control" },
            { text: "Biocides chemicals" },
            { text: "Native and modified starch" },
            { text: "Retention and drainage aids" },
            { text: "Internal and surface sizing" },
            { text: "Dry strength additives" },
            { text: "Wet strength additives" },
            { text: "Dyes" },
            { text: "Defoamer" },
            { text: "Coating clay and filler" },
            { text: "Coating binder" },
            { text: "Barrier coating" },
            { text: "Oil resistance chemicals" },
            { text: "Fertilizer for water treatment" },
            { text: "Odor control chemicals" },
            { text: "Basic chemicals" },
            { text: "Liquid gases" },
            { text: "Limestone powder" },
            { text: "Quicklime" },
            { text: "Calcium carbonate" },
            { text: "Flocculant & coaggulant polymer for water treatment" },
          ],
        },
        {
          id: 2,
          title: "Fuel",
          show: false,
          parent: "nav-general_accordion",
          list: [
            { text: "Coal" },
            { text: "Biomass" },
            { text: "Cracker Bottom" },
          ],
        },
        {
          id: 3,
          title: "Machinery and Parts",
          show: false,
          parent: "nav-general_accordion",
          list: [
            { text: "Corrugating Machine & Equipment" },
            { text: "Machine of paper making & Equipment" },
            { text: "Printing machine & Equipment" },
          ],
        },
        {
          id: 4,
          title: "Industrial Supply",
          show: false,
          parent: "nav-general_accordion",
          list: [
            { text: "Anvil cover for diecut" },
            { text: "Blade Knife" },
            { text: "Brick" },
            { text: "Carrier rope" },
            { text: "Core plugs" },
            { text: "Corner guard" },
            { text: "Diecut Equipment" },
            { text: "Diecut plate" },
            { text: "Digital UV print ink" },
            { text: "Doctor blade for Paper machine" },
            { text: "Doctor blade for Printing machine" },
            { text: "FEST box component" },
            { text: "Bag filter" },
            { text: "Flexo - consumable supply" },
            { text: "Flexo additive" },
            { text: "Flexo Liquid/Solid printing plate" },
            { text: "Flexo UV" },
            { text: "Flexo waterbase Post/Pre print ink" },
            { text: "Glue" },
            { text: "Ink cleaning" },
            { text: "Insulation" },
            { text: "Labels" },
            { text: "Laboratory Equipment for Packaging" },
            { text: "Machine cleaning" },
            { text: "Offset - consumable supply" },
            { text: "Offset Ink" },
            { text: "Offset printing plate" },
            { text: "Packaging materials" },
            { text: "Pad print ink" },
            { text: "PAD printing plate" },
            { text: "Paper band" },
            { text: "Paper core" },
            { text: "Paperboard and packaging papers" },
            { text: "PE rope" },
            { text: "Printing consumable supply" },
            { text: "Slitted paper" },
            { text: "Slitter knife" },
            { text: "Slotter knife" },
            { text: "Tape for industrial" },
            { text: "Stitching wire" },
            { text: "Wood cutting knife" },
          ],
        },
        {
          id: 5,
          title: "Maintenance Repair & Operations",
          show: false,
          parent: "nav-general_accordion",
          list: [
            { text: "Air conditioning services" },
            { text: "Boilers/ESP Service" },

            { text: "Building Cleaning and Service" },
            { text: "Calibration" },
            { text: "High Pressure Cleaning" },
            { text: "Concrete work" },
            { text: "Cranes Services" },
            { text: "Electrical" },

            { text: "Environment testing" },
            { text: "General building construction" },
            { text: "Insulation Services" },
            { text: "IT services" },
            { text: "Labor general" },
            { text: "Labor in process and special" },
            { text: "Manufacturing - Spare part" },
            { text: "Electrical Maintenance Service" },
            { text: "Mechanical Maintenance Service" },
            { text: "Motor or generators Services" },
            { text: "Operation services" },
            { text: "Outsource service" },
            { text: "Pumps Services" },
            { text: "Roll Maintenance and Recover Service" },
            { text: "Roofing" },
            { text: "Scaffolding" },
            { text: "Transformers Services" },
            { text: "Waste disposal service" },
            { text: "" },
            {
              text: "Building construction and support and maintenance and repair services",
            },
            { text: "Engineering, Research and Technologies based services" },
          ],
        },
        {
          id: 6,
          title: "Warehouse Management & Transportation",
          show: false,
          parent: "nav-general_accordion",
          list: [
            { text: "Truck transportation" },
            { text: "Warehouse operation" },
          ],
        },
      ],
      menu: 1,
    };
  },
  methods: {
    emtitclick(i) {
      console.log(i);
      if (this.menu === i) {
        this.menu = 0;
        return;
      }
      this.menu = i;

      window.location.hash = "#heading" + i;
      setTimeout(() => {
        window.location.hash = "#weProcure";
      }, 100);
    },
  },
  mixins: [commonFaq],
};
</script>
