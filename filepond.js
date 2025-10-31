import Vue from 'vue';
import vueFilePond from 'vue-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import plugins if necessary
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Create component
const FilePond = vueFilePond(/* FilePondPluginImagePreview */);

// Register component globally
Vue.component('FilePond', FilePond);
