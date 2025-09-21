<template>
  <section
    class="flex items-center flex-col text-center justify-center relative overflow-hidden"
  >
    <div class="max-w-[1000px] w-full">
      <!-- Main heading -->
      <h1
        class="mt-16 text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Next-Generation <br />
        AI Platform for Uzbek Language
      </h1>

      <!-- Subtitle -->
      <p
        class="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        Automate visitor interactions to handle inquiries, capture leads and
        <br />
        deliver real-time results – all without coding.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        <button
          @click="handleStartForFree"
          class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
        >
          Start for Free
        </button>
        <button
          @click="handleRequestDemo"
          class="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer flex items-center gap-2"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Request Demo
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleStartForFree = () => {
  window.open("https://space.toolbar-ai.com/", "_blank");
};

const handleRequestDemo = () => {
  // Add your demo request logic here
  console.log("Request demo clicked");
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
