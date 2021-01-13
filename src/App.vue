<template>
  <div class="flex min-h-full">
    <Nav class="nav flex-none" :class="!navExpanded? [ 'hidden sm:block']: []">
      <template v-slot:logo>
        <Logo class="hidden p-4 sm:flex"/>
      </template>
    </Nav>
    <div class="flex-grow">
      <Header class="flex h-16 p-4 justify-end border-b border-gray-300 bg-white">  
        <Logo class="sm:hidden flex-grow"/>
        <Notifications/>
        <Hamburger :activated="navExpanded" @click="navExpanded = !navExpanded" class="sm:hidden"/>
      </Header>
      <Body>
      </Body>
      <Footer class="w-full"/>
    </div>
  </div>
</template>

<script>
import {watch, ref} from 'vue'
import {useRoute} from 'vue-router'

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
    const route = useRoute()

    watch(()=> route.name,
      ()=> {navExpanded.value = false}
    )

    return {navExpanded}
  }
}
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";


@layer base {
  html, body, div#app {
    @apply h-full;
  }

  body, div#app {
    /*@apply relative;*/
  }

  h1 {
    @apply text-3xl font-extrabold;
  }

  h2 {
    /*@apply text-gray-600 text-xl font-semibold;*/
  }
}

@layer components {

  .nav {
    @apply pl-6 pr-6 pb-3 sm:pb-0;
    @apply absolute top-16 sm:static;
    @apply bg-white;
    @apply border-gray-300 border-b sm:border-r; 
    @apply w-full sm:w-60 md:w-64 lg:w-72 sm:pt-6;
    @apply overflow-hidden;
  }

  .input {
    @apply mt-2;
  }

  .input-label {
    @apply text-sm font-medium text-gray-700;
  }

  .input-field {
    @apply w-full border-gray-300 text-sm;
  }
}
</style>