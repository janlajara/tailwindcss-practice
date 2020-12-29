<template>
    <button @click="activated = !activated">
        <Icon v-if="activated" id="times"/>
        <Icon v-else id="bars"/>
    </button>
</template>
<script>
import {ref} from 'vue'
import Icon from '@/components/Icon.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faTimes)

export default {
    components: {
        Icon
    },
    setup() {
        const activated = ref(false)
        return {activated}
    }
}
</script>