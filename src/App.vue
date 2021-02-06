<template>
  <router-view/>
</template>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";


@layer base {
  html, body, div#app {
    @apply h-full;
  }

  html {
    @apply text-gray-900;
  }

  h1 {
    @apply text-2xl sm:text-3xl font-extrabold;
  }
}
</style>