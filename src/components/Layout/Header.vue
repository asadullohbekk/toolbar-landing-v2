<template>
  <header
    class="bg-[#18181F] relative z-[100]"
    data-aos="fade-down"
    data-aos-duration="800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <a href="/">
          <img src="@/assets/images/svg/logo.svg" alt="Logo" class="h-8" />
        </a>
        <!-- Navigation Menu -->
        <nav class="hidden md:flex items-center space-x-8">
          <!-- AI Agents Dropdown -->
          <div class="relative">
            <!-- <CHANGE> Changed from hover to click event -->
            <button
              @click="toggleDropdown('aiAgents')"
              class="transition-200 cursor-pointer text-white hover:text-gray-300 flex items-center space-x-1 py-2"
            >
              <span>AI Agents</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showAiAgents }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <!-- <CHANGE> Added Vue transition for fade animation -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 transform scale-95"
              enter-to-class="opacity-100 transform scale-100"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 transform scale-100"
              leave-to-class="opacity-0 transform scale-95"
            >
              <div
                v-show="showAiAgents"
                class="absolute top-full left-0 mt-1 w-48 bg-[#090910] border border-gray-700 rounded-md shadow-lg py-2 z-[9999]"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >Agents</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                >
                  Models</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >Voice chats</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                >
                  Analyzments</a
                >
              </div>
            </Transition>
          </div>

          <!-- Industry Dropdown -->
          <div class="relative">
            <!-- <CHANGE> Changed from hover to click event -->
            <button
              @click="toggleDropdown('industry')"
              class="transition-200 cursor-pointer text-white hover:text-gray-300 flex items-center space-x-1 py-2"
            >
              <span>Industry</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showIndustry }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <!-- <CHANGE> Added Vue transition for fade animation -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 transform scale-95"
              enter-to-class="opacity-100 transform scale-100"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 transform scale-100"
              leave-to-class="opacity-0 transform scale-95"
            >
              <div
                v-show="showIndustry"
                class="absolute top-full left-0 mt-1 w-48 bg-[#090910] border border-gray-700 rounded-md shadow-lg py-2 z-[9999]"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >Healthcare</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >Finance</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >E-commerce</a
                >
              </div>
            </Transition>
          </div>

          <!-- Company Dropdown -->
          <div class="relative">
            <!-- <CHANGE> Changed from hover to click event -->
            <button
              @click="toggleDropdown('company')"
              class="transition-200 cursor-pointer text-white hover:text-gray-300 flex items-center space-x-1 py-2"
            >
              <span>Company</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showCompany }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <!-- <CHANGE> Added Vue transition for fade animation -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 transform scale-95"
              enter-to-class="opacity-100 transform scale-100"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 transform scale-100"
              leave-to-class="opacity-0 transform scale-95"
            >
              <div
                v-show="showCompany"
                class="absolute top-full left-0 mt-1 w-48 bg-[#090910] border border-gray-700 rounded-md shadow-lg py-2 z-[9999]"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >About Us</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >Careers</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-[#18181F] cursor-pointer"
                  >Contact</a
                >
              </div>
            </Transition>
          </div>

          <!-- Regular Links -->
          <a href="#" class="text-white hover:text-gray-300 cursor-pointer"
            >Blogs</a
          >
          <a href="#" class="text-white hover:text-gray-300 cursor-pointer"
            >Pricing</a
          >
        </nav>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4">
          <button
            @click="handleGetStarted"
            class="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showAiAgents = ref(false);
const showIndustry = ref(false);
const showCompany = ref(false);

// <CHANGE> Added click-based dropdown toggle function
const toggleDropdown = (dropdown) => {
  // Close all dropdowns first
  showAiAgents.value = false;
  showIndustry.value = false;
  showCompany.value = false;

  // Open the clicked dropdown
  if (dropdown === "aiAgents") {
    showAiAgents.value = true;
  } else if (dropdown === "industry") {
    showIndustry.value = true;
  } else if (dropdown === "company") {
    showCompany.value = true;
  }
};

// <CHANGE> Added click outside handler to close dropdowns
const handleClickOutside = (event) => {
  // Get the header navigation container
  const navContainer = document.querySelector("nav");

  // If click is outside the navigation area, close all dropdowns
  if (navContainer && !navContainer.contains(event.target)) {
    showAiAgents.value = false;
    showIndustry.value = false;
    showCompany.value = false;
  }
};

const handleGetStarted = () => {
  window.open("https://space.toolbar-ai.com/", "_blank");
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
