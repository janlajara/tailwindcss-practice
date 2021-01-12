<template>
    <nav>
        <slot name="logo"/>
        <hr class="mt-3 hidden sm:flex"/>
        <NavLink :to="{name: 'Dashboard'}"
            icon="home"
            @click="selected = ''" class="nav-link">
            Home</NavLink>
        <hr/>
        <NavGroup name="Interface">
            <NavMenu
                icon="extension"
                @click="selected = 'components'" 
                :selected="selected"
                meta="components" class="nav-link">
                Components</NavMenu>
            <NavMenu
                icon="web"
                @click="selected = 'pages'" 
                :selected="selected"
                meta="pages" class="nav-link">
                Pages</NavMenu>
        </NavGroup>
    </nav>
</template>

<script>
import {ref} from 'vue'
import NavGroup from '@/components/NavGroup.vue'
import NavMenu from '@/components/NavMenu.vue'
import NavLink from '@/components/NavLink.vue'

export default {
    components: {
        NavGroup, NavMenu, NavLink
    },
    setup() {
        const selected = ref()
        return {
            selected
        }
    }
}
</script>

<style scoped>
@layer components {
    .nav-link {
        @apply pt-1 pb-1;
        @apply mt-2 mb-2;
    }
}
</style>
