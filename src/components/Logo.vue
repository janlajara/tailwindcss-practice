<template>
    <div class="flex justify-left m-auto">
        <Icon id="drumstick-bite" class="text-yellow-500 transform -rotate-90 fa-2x"/>
        <span class="pl-1 font-serif text-xl sm:text-3xl italic font-bold">Shereps</span>
    </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faDrumstickBite} from '@fortawesome/free-solid-svg-icons'
library.add(faDrumstickBite)

export default {
    components: {
        Icon
    }
}
</script>