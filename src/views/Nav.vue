<template>
    <nav>
        <slot name="logo"/>
        <span class="mt-6 block"/>
        <NavLink :to="{name: 'Home'}"
            icon="home"
            @selected="select" 
            :selected="selected" class="nav-link">
            Home</NavLink>
        <NavGroup name="Interface">
            <NavMenu
                icon="extension"
                @selected="select" 
                :selected="selected"
                meta-group="Components" class="nav-link">
                Components</NavMenu>
            <NavMenu
                icon="web"
                @selected="select" 
                :selected="selected"
                meta-group="Pages" class="nav-link">
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
        const select = (value) => {
            selected.value = value
        }
        return {
            selected, select
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
