<template>
  <div>
    <Header class="p-4 pt-6 border-b border-gray-300 sm:border-none">
      <Hamburger @click="navExpanded = !navExpanded" 
        class="sm:hidden"/>
    </Header>
    <Nav class="nav" :class="!navExpanded? 'h-0 sm:h-full': []"/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import {ref} from 'vue'

import Nav from '@/views/Nav.vue'
import Header from '@/views/Header.vue'
import Body from '@/views/Body.vue'
import Footer from '@/views/Footer.vue'

import Hamburger from '@/components/Hamburger.vue'

export default {
  components: {
    Nav, Header, Body, Footer,
    Hamburger
  },
  setup(){
    const navExpanded = ref(false)
    return {navExpanded}
  }
}
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@layer components {
  .nav {
    @apply pl-6 pr-6;
    @apply sm:absolute sm:left-0 sm:top-0;
    @apply border-gray-300 sm:border-r; 
    @apply w-full sm:w-60 sm:h-full sm:pt-6;
    @apply overflow-hidden;
  }
}
</style>