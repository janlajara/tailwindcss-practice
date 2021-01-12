<template>
    <div class="flex items-center cursor-pointer">
        <Icon :id="$props.icon" class="pr-4 w-8 text-gray-400"/>
        <router-link v-bind="$props" class="w-full">
            <slot/>
        </router-link>  
    </div>
</template>

<script>
import {RouterLink} from 'vue-router'
import Icon from '@/components/Icon.vue'

export default {
    props: {
        ...RouterLink.props,
        icon: String
    },
    components: {
        Icon
    }
}
</script>