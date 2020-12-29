<template>
    <div class="flex items-center">
        <Icon :id="$props.icon" class="pr-4"/>
        <router-link v-bind="$props">
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