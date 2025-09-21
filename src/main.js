import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.mount("#app");

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration
  offset: 100, // Offset from the original trigger point
});
