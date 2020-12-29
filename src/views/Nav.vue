<template>
    <nav>
        <NavLink :to="{name: 'Dashboard'}"
            icon="home"
            @click="selected = ''" class="nav-link">
            Home</NavLink>
        <hr/>
        <NavGroup name="Interface">
            <NavMenu
                icon="cog"
                @click="selected = 'components'" 
                :selected="selected"
                meta="components" class="nav-link">
                Components</NavMenu>
            <NavMenu
                icon="file-alt"
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

import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome, faCog, faFileAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faCog, faFileAlt)

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
