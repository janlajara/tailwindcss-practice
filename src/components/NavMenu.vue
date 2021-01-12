<template>
    <div> 
        <div class="flex items-center" @click.prevent="collapsed = !collapsed" >
            <Icon :id="$props.icon" class="pr-4 w-8 text-gray-400"/>
            <a href="#" class="flex-grow">
                <slot/>
            </a>
            <Icon id="expand_more" class="transform text-gray-400" 
                :class="collapsed? '' : 'rotate-90'"/>
        </div>
        <div ref="navLinks"
            class="flex flex-col overflow-hidden transition-height duration-100 ease-out"
            :style="height? {height: `${collapsed? height:0}px`}: {}" >
            <NavLink :to="{name: route.name}" v-for="(route, i) in group" :key="i"
                class="mt-2.5 text-sm">
                {{route.name}}
            </NavLink>
        </div>
    </div>
</template>

<script>
import {ref, onMounted, watch} from 'vue'
import {useRouter} from 'vue-router'
import NavLink from '@/components/NavLink.vue'
import Icon from '@/components/Icon.vue'

export default {
    props: {
        selected: String,
        meta: String,
        icon: String
    },
    components: {
        NavLink, Icon
    },
    setup(props) {
        const router = useRouter()
        const routes = router.getRoutes()
        const navLinks = ref()
        const height = ref()
        const collapsed = ref(false)
        
        watch(()=> props.selected,
            () => collapsed.value = props.selected == props.meta
        )

        onMounted(()=> {
            height.value = navLinks.value.clientHeight
        })

        let group = []
        if (props.meta) 
            group = routes.filter( r => {return props.meta == r.meta.group})

        return {
            group,
            collapsed,
            navLinks,
            height
        }
    }
}
</script>
