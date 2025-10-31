<template>
  <section id="" class="Other-area mt-50 mb-50">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-md-5">
          <!--  -->
          <div
            class="banner-Zone"
            data-sal="slide-right"
            data-sal-delay="170"
            data-sal-duration="1000">
            <div class="banner-img">
              <!-- -->
              <img src="../../assets/img/home/Other1.png" alt="" />
            </div>
            <div
              class="banner-text"
              data-sal="slide-right"
              data-sal-delay="170"
              data-sal-duration="1000">
              <!-- -->
              <div class="title">
                <!-- คู่มือบรรษัทภิบาลเอสซีจี แพคเกจจิ้ง 
                SCG Packaging Corporate Governance Manual -->
   {{ $t("CorporateGovernanceManual") }}
              </div>
              <div class="row m-0">
                <div class="btn-readmore">
                  <a
                    target="_blank"
                    href="https://investor.scgpackaging.com/storage/content/corporate-governance/corporate-governance-policies-and-guidelines-of-scg-packaging/20211125-scgp-diversity-and-inclusion-policy-th.pdf"
                    class=" ">
                       {{ $t("ReadMore") }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-5">
          <div
            class="banner-Zone"
            data-sal="slide-right"
            data-sal-delay="170"
            data-sal-duration="1000">
            <div class="banner-img">
             
              <img src="../../assets/img/home/Other2.jpg" alt="" />
            </div>
            <div
              class="banner-text"
              data-sal="slide-right"
              data-sal-delay="170"
              data-sal-duration="1000">
            
              <div class="title">
                <!-- โครงสร้างและกลไกในการกำกับดูแลกิจการของเอสซีจี แพคเกจจิ้ง
                The Structure and Mechanisms of Corporate Governance of SCG Packaging -->
 {{ $t("TheStructureandMechanismsofCorporateGovernance") }}






              </div>
              <div class="row m-0">
                <div class="btn-readmore">
                  <a
                    target="_blank"
                    href="https://investor.scgpackaging.com/storage/content/corporate-governance/corporate-governance-policies-and-guidelines-of-scg-packaging/20211125-scgp-diversity-and-inclusion-policy-th.pdf"
                    class=" ">
                       {{ $t("ReadMore") }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      detail: [
        {
          title: "คู่ธุรกิจ",
          detail:
            "ของมูลค่าการจัดหาแสดงความมุ่งมั่นที่จะปฏิบัติตามจรรยาบรรณคู่ธุรกิจ SCGP",
          per: 100,
        },
        {
          title: "คู่ธุรกิจ",
          detail:
            "ของมูลค่าการจัดหาผ่านประเมินความเสี่ยงด้านสิ่งแวดล้อม สังคม และการกำกับดูแล (ESG)",
          per: 100,
        },
        {
          title: "คู่ธุรกิจในกระบวนการผลิต",
          detail:
            "ผ่านการรับรองความปลอดภัย (SCG Contractor Certification System, SCS)",
          per: 100,
        },
      ],
    };
  },
};
</script>
