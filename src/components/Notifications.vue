<template>
    <button>
        <Icon id="bell"/>
    </button>
</template>

<script>
import Icon from '@/components/Icon.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBell} from '@fortawesome/free-solid-svg-icons'
library.add(faBell)

export default {
    components: {
        Icon
    }
}
</script>