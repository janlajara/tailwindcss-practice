<template>
  <div>
    <Nav class="nav" :class="!navExpanded? [ 'hidden sm:block']: []">
      <template v-slot:logo>
        <Logo class="hidden p-4 sm:flex"/>
      </template>
    </Nav>
    <div class="sm:ml-60 md:ml-72">
      <Header class="flex h-16 p-4 justify-end border-b border-gray-300 bg-white">  
        <Logo class="sm:hidden flex-grow"/>
        <Notifications/>
        <Hamburger :activated="navExpanded" @click="navExpanded = !navExpanded" class="sm:hidden"/>
      </Header>
      <Body>
      </Body>
      <Footer class="absolute bottom-0 h-24 w-full"/>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

import Nav from '@/views/Nav.vue'
import Header from '@/views/Header.vue'
import Body from '@/views/Body.vue'
import Footer from '@/views/Footer.vue'

import Logo from '@/components/Logo.vue'
import Hamburger from '@/components/Hamburger.vue'
import Notifications from '@/components/Notifications.vue'

export default {
  components: {
    Nav, Header, Body, Footer,
    Logo, Hamburger, Notifications
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


@layer base {
  h1 {
    @apply text-3xl font-extrabold;
  }

  h2 {
    /*@apply text-gray-600 text-xl font-semibold;*/
  }
}

@layer components {
  html, body {
    height: 100%;
  }

  .nav {
    @apply pl-6 pr-6 pb-3 sm:pb-0;
    @apply absolute top-16 sm:left-0 sm:top-0;
    @apply bg-white;
    @apply border-gray-300 border-b sm:border-r; 
    @apply w-full sm:w-60 md:w-72 sm:h-full sm:pt-6;
    @apply overflow-hidden;
  }
}
</style>