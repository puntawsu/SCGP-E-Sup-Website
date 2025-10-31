<template>
  <LayoutOne>
    <HeaderSubPage1 :headData="headData" />
    <div v-if="loading" class="loading-overlay">
      <div class="loader"></div>
    </div>
    <div class="BecomeaPartner_Page">
      <div class="container">
        <div class="row detail justify-content-center">
          <div class="col-12 col-sm-11 col-md-9">
            <div class="becomeaPartner_card">
              <div class="title">
                <h3>{{ $t('BecomeaPartner') }}</h3>
              </div>
              <form
                class="g-3 needs-validation"
                @submit.prevent="validateForm"
                novalidate
              >
                <div class="from-zone row m-0">
                  <div class="col-md-12">
                    <div class="from-zone-title">
                      {{ $t('becomeaPartner-BusinessPartnerDetails') }}
                    </div>
                  </div>
                  <div class="col-md-12 from-group">
                    <label class="form-check-label form-label">
                      <b>
                        {{
                          $t('becomeaPartner-CountryWhereBusinessIsRegistered')
                        }}
                      </b>
                      <span Class="red-mark">*</span>
                    </label>

                    <div class="form-check-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioOption"
                          id="option1"
                          :value="1"
                          v-model="RegisteredBusinessPartnerCountries"
                          required
                        />
                        <label class="form-check-label" for="option1">
                          {{ $t('becomeaPartner-Domestic') }}
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioOption"
                          v-model="RegisteredBusinessPartnerCountries"
                          id="option2"
                          :value="2"
                          required
                        />
                        <label class="form-check-label" for="option2">
                          {{ $t('becomeaPartner-International') }}
                        </label>
                      </div>
                    </div>
                    <div class="invalid-feedback">
                      Please select one option.
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>{{ $t('becomeaPartner-TaxIdentificationNumber') }} </b>
                      <span Class="red-mark">*</span>
                      <br />
                      <small
                        id="passwordHelpBlock"
                        class="form-text text-muted"
                      >
                        {{ $t('becomeaPartner-ForIndividuals') }}
                      </small>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="
                        $t('becomeaPartner-TaxIdentificationNumber')
                      "
                      v-model="TaxID"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b> {{ $t('becomeaPartner-ThaiCompanyName') }} </b>
                      <span Class="red-mark">*</span>
                      <br />
                      <small id="passwordHelpBlock" class="form-text text-muted"
                        >{{ $t('becomeaPartner-ForIndividualsThai') }}
                        
                      </small>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="$t('becomeaPartner-ThaiCompanyName')"
                      v-model="CompanyName_Thai"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>
                        {{
                          $t('becomeaPartner-EnglishCompanyName')
                        }}
                      </b>
                      <span Class="red-mark">*</span>
                      <br />
                      <small
                        id="passwordHelpBlock"
                        class="form-text text-muted"
                      >
                        
                      </small>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="$t('becomeaPartner-EnglishCompanyName')"
                      v-model="CompanyName_Eng"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>
                        
                        {{ $t('becomeaPartner-CompanyPhoneNumber') }}</b
                      >
                      <span Class="red-mark">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="$t('becomeaPartner-CompanyPhoneNumber')"
                      v-model="Company_Tel"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>
                        
                        {{ $t('becomeaPartner-CompanyWebsite') }}</b
                      >
                      <span Class="red-mark">*</span>
                      <br />
                      <small
                        id="passwordHelpBlock"
                        class="form-text text-muted"
                      >
                        
                        {{ $t('becomeaPartner-IfApplicable') }}
                      </small>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="$t('becomeaPartner-CompanyWebsite')"
                      v-model="Company_Web"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                </div>
                <div class="from-zone row justify-content-between m-0">
                  <div class="col-md-12">
                    <div class="from-zone-title">
                      {{
                        $t('becomeaPartner-ContactInformationOfSalesperson')
                      }}
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b> {{ $t('becomeaPartner-FirstName') }}</b>
                      <span Class="red-mark">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="$t('becomeaPartner-SalespersonsFirstName')"
                      v-model="Sale_Name"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b> {{ $t('becomeaPartner-LastName') }} </b>
                      <span Class="red-mark">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="$t('becomeaPartner-SalespersonsLastName')"
                      v-model="Sale_Surname"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>
                        
                        {{ $t('becomeaPartner-SalespersonsMobileNumber') }}</b
                      >
                      <span Class="red-mark">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder="
                        $t('becomeaPartner-SalespersonsMobileNumber')
                      "
                      v-model="Sale_Tel"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>  {{ $t('becomeaPartner-Email') }} </b>
                      <span Class="red-mark">*</span>
                      <br />
                      <small
                        id="passwordHelpBlock"
                        class="form-text text-muted"
                      >
                        {{
                          $t('becomeaPartner-ForExampleEmail')
                        }}
                        email1@mail.com,email2@mail.com
                      </small>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="validationCustom01"
                      :placeholder=" $t('becomeaPartner-Email')"
                      v-model="Sale_Email"
                      required
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                </div>
                <div class="from-zone row justify-content-between m-0">
                  <div class="col-md-12">
                    <div class="from-zone-title">
                       {{ $t('becomeaPartner-ProductInformation') }}
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>
                        
                        {{ $t('becomeaPartner-TypeOfBusiness') }}</b
                      >
                      <span Class="red-mark">*</span>
                    </label>
                    <select
                      class="form-select"
                      id="validationCustom04"
                      v-model="Business_Type"
                      required
                    >
                      <option selected disabled value="">
                        {{ $t('becomeaPartner-PleaseSelect') }}
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>
                        
                        {{ $t('becomeaPartner-BusinessCategory') }}</b
                      >
                      <span Class="red-mark">*</span>
                    </label>
                    <select
                      v-model="Business_Category"
                      class="form-select"
                      id="validationCustom04"
                      required
                    >
                      <option selected disabled value="">
                        {{ $t('becomeaPartner-PleaseSelect') }}
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>

                  <div class="col-md-12 from-group">
                    <label for="validationCustom01" class="form-label">
                      <b>
                         {{ $t('becomeaPartner-ProductBrand') }}</b
                      >

                      <br />
                      <small
                        id="passwordHelpBlock"
                        class="form-text text-muted"
                      >
                        {{
                          $t('becomeaPartner-IfMultipleBrands')
                        }}
                      </small>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      placeholder=" "
                      v-model="Brand"
                    />
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-md-12 from-group">
                    <label for="customFileInput" class="form-label">
                      <b>
                        
                        {{ $t('becomeaPartner-FileUploadPDFOnly') }}</b
                      >
                    </label>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFileInput"
                        @change="handleFileChange"
                        ref="fileInput"
                        accept=".pdf"
                      />
                      <label
                        v-if="uploadedFilesname"
                        class="custom-file-label"
                        for="customFileInput"
                      >
                        {{ uploadedFilesname }}
                      </label>
                      <label
                        v-else
                        class="custom-file-label"
                        for="customFileInput"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                              fill="#6e6e6e"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 2.25C12.2106 2.25 12.4114 2.33852 12.5535 2.49392L16.5535 6.86892C16.833 7.17462 16.8118 7.64902 16.5061 7.92852C16.2004 8.20802 15.726 8.18678 15.4465 7.88108L12.75 4.9318V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V4.9318L8.55353 7.88108C8.27403 8.18678 7.79963 8.20802 7.49393 7.92852C7.18823 7.64902 7.16698 7.17462 7.44648 6.86892L11.4465 2.49392C11.5886 2.33852 11.7894 2.25 12 2.25Z"
                              fill="#6e6e6e"
                            ></path>
                          </g>
                        </svg>
                        {{ $t('becomeaPartner-ForExampleCustomerReference') }}
                        {{
                          'เช่นประวัติ Referenece Customer , Company Profile เป็นต้น'
                        }}
                      </label>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4"></div>
                  <div class="col-12 col-md-4 from-group">
                    <div class="Submit-form">
                      <button class="btn btn-primary" type="submit">
                        <b> {{ $t('becomeaPartner-Submit') }} </b>
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-md-4"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <CustomModal>
        <div>
          <b>
            {{ $t('becomeaPartner-modal-1') }}
          </b>
        </div>
        <div class="mx-2">{{ $t('becomeaPartner-modal-2') }}</div>
        <div class="mx-2">{{ $t('becomeaPartner-modal-3') }}</div>
        <div>
          <b> {{ $t('becomeaPartner-modal-4') }} </b>
        </div>
        <div class="mx-2">{{ $t('becomeaPartner-modal-5') }}</div>
        <div class="mx-2">
          {{ $t('becomeaPartner-modal-6') }}
        </div>
        <div class="mx-2">
          {{ $t('becomeaPartner-modal-7') }}
        </div>
        <div class="mx-2">
          {{ $t('becomeaPartner-modal-8') }}
        </div>
        <div>
          {{ $t('becomeaPartner-modal-9') }}
        </div>
        <div class="footer">
          <div @click="handleConfirm" class="btn">
            <a> {{ $t('becomeaPartner-modal-10') }}</a>
          </div>
        </div>
      </CustomModal>
    </div>
  </LayoutOne>
</template>

<script>
import { ref } from 'vue';
import LayoutOne from '~/layouts/LayoutOne.vue';
import HeaderSubPage1 from '~/components/header/HeaderSubPage1.vue';
import policyImage from '../assets/img/headerPage/B_becomeaPartner.png'; // นำเข้าภาพแบบ ES6
import { toast } from 'vue3-toastify';
import CustomModal from '@/components/CustomModal.vue';
import { useStore } from 'vuex';
import { fetchPost, fetchFile } from '~/services/fetch'; // Import your fetchPost function

export default {
  setup() {},
  data() {
    return {
      loading: false,
      uploadedFilesname: '',
      uploadedFiles: null,
      uploadedFiles2: null,

      headData: {
        title: 'BecomeaPartner',
        breadcrumbs: ['BecomeaPartner'],
        banner: policyImage,
      },
      username: '',
      password: '',
      gender: '',
      RegisteredBusinessPartnerCountries: 0,
      TaxID: '',
      CompanyName_Thai: '',
      CompanyName_Eng: '',
      Company_Tel: '',
      Company_Web: '',
      Sale_Name: '',
      Sale_Surname: '',
      Sale_Tel: '',
      Sale_Email: '',
      Business_Type: '',
      Business_Category: '',
      Brand: '',
      Attachment: '',
      // username: "username",
      // password: "password",
      // gender: "gender",
      // RegisteredBusinessPartnerCountries: 1,
      // TaxID: "TaxID",
      // CompanyName_Thai: "CompanyName_Thai",
      // CompanyName_Eng: "CompanyName_Eng",
      // Company_Tel: "Company_Tel",
      // Company_Web: "Company_Web",
      // Sale_Name: "Sale_Name",
      // Sale_Surname: "Sale_Surname",
      // Sale_Tel: "Sale_Tel",
      // Sale_Email: "Sale_Email@test",
      // Business_Type: "Business_Type",
      // Business_Category: "Business_Category",
      // Brand: "Brand",
      // Attachment: "Attachment",
    };
  },
  components: { LayoutOne, HeaderSubPage1 },
  mounted() {
    console.log('Bootstrap:', window.bootstrap);
  },
  methods: {
    showAlert() {
      this.$swal
        .fire({
          title: 'Success!',
          text: 'ส่งข้อมูลสำเร็จ',
          icon: 'success',
        })
        .then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            setTimeout(() => {
              window.scrollTo({
                top: 0,
                // behavior: "auto",
              });

              setTimeout(() => {
                location.reload();
              }, 1000);
            }, 500);
          }
        });
    },
    showModal() {
      this.$store.dispatch('openModal');
    },
    hideModal() {
      this.$store.dispatch('closeModal');
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.uploadedFiles = file;
      this.uploadedFilesname = file ? file.name : '';
    },
    async handleConfirm() {
      this.hideModal();

      // this.loading = true;

      try {
        // Step 1: Save form data
        const formData = {
          partner_type: this.RegisteredBusinessPartnerCountries,
          tax_id: this.TaxID,
          company_name_th: this.CompanyName_Thai,
          company_name_en: this.CompanyName_Eng,
          company_phone_number: this.Company_Tel,
          company_web_url: this.Company_Web,
          sales_name: this.Sale_Name,
          sales_surname: this.Sale_Surname,
          sales_phone_number: this.Sale_Tel,
          sales_email: this.Sale_Email,
          product_business_type: this.Business_Type,
          product_business_category: this.Business_Category,
          product_brand: this.Brand,
        };

        const saveDataResponse = await fetchPost(
          '/vendor/add-vendor',
          formData
        );
        const newId = saveDataResponse; // Adjust according to your API response
        // Step 2: Upload file if it exists
        if (this.uploadedFiles) {
          const FilesformData = new FormData();
          FilesformData.append('file', this.uploadedFiles);
          console.log('FilesformData:', FilesformData.get('file'));
          const uploadFileResponse = await fetchFile(
            `/attachment/${newId}/upload-file-vendor`,
            FilesformData
          );

          this.showAlert();
        } else {
          this.showAlert();
        }
      } catch (error) {
        console.error('Form submission error:', error);
        toast.error('เกิดข้อผิดพลาดในการส่งข้อมูล');
      } finally {
        this.loading = false;
      }
    },

    validateForm(event) {
      const form = event.target;
      const checkValidity = !form.checkValidity();
      console.log(checkValidity);
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        toast.error('กรุณากรอกข้อมูลให้ครบถ้วน');
      } else {
        this.showModal();
      }
    },
  },
};
</script>
