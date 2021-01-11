<template>
    <div>
        <ul class="flex border-gray-300 border-b mb-8">
            <li v-for="(tab, index) in tabs" :key="index"
                @click="selectTab(index)"
                class="tab cursor-pointer" 
                :class="index === selectedIndex? 'border-yellow-400 border-b-2' : ''">
                {{tab.props.title}}
            </li>
        </ul>
        <slot/>
    </div>
</template>

<script>
import {reactive, toRefs, onBeforeMount, onMounted, provide} from 'vue'

export default {
    name: 'Tabs',
    setup(_, {slots}) {
        const state = reactive({
            selectedIndex: 0,
            tabs: [],
            count: 0
        })

        const selectTab = (index) => {
            state.selectedIndex = index
        }

        provide('TabsManager', state)

        onBeforeMount(()=> {
            if (slots.default) {
                state.tabs = slots.default().filter( child => {
                    return child.type.name==='Tab'})
            }
        })

        onMounted(()=> selectTab(0))

        return {
            ...toRefs(state), selectTab
        }
    }
}
</script>

<style scoped>
@layer components {
    .tab {
        @apply py-4;
    }

    .tab:not(:first-child):not(:last-child) {
        @apply mx-6;
    }

    .tab:first-child {
        @apply mr-6;
    }

    .tab:last-child {
        @apply ml-6;
    }
}
</style>