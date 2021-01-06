<template>
    <button :class="$props.activated? 'bg-black rounded' : ''">
        <Icon id="bars" :class="$props.activated? 'text-white': ''"/>
    </button>
</template>
<script>
import Icon from '@/components/Icon.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
library.add(faBars)

export default {
    components: {
        Icon
    },
    props: {
        activated: Boolean
    }
}
</script>