<template>
    <div> 
        <div class="flex items-center" >
            <Icon :id="$props.icon" class="pr-4 w-8" 
                :class="collapsed? 'text-yellow-500' : 'text-gray-400'"/>
            <a href="#" class="flex-grow" 
                @click.prevent="$emit('selected', $props.meta)"
                :class="collapsed? 'text-yellow-500 font-bold' : ''">
                <slot/>
            </a>
            <Icon id="expand_more" class="transform text-gray-400" 
                :class="collapsed? '' : 'rotate-90'"/>
        </div>
        <div ref="navLinks"
            class="flex flex-col overflow-hidden transition-height duration-100 ease-out"
            :style="height? {height: `${collapsed? height:0}px`}: {}" >
            <NavLink :to="{name: route.name}" v-for="(route, i) in group" :key="i"
                class="mt-3 text-sm" :class="$route.name == route.name? 'text-yellow-500' : ''">
                {{route.name}}
            </NavLink>
        </div>
    </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
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
        const routes = useRouter().getRoutes()
        const navLinks = ref()
        const height = ref()
        const collapsed = computed(()=> props.selected == props.meta)

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
