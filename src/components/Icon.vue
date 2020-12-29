<template>
    <div class="w-10 flex">
        <FontAwesomeIcon v-if="$props.id" :icon="$props.id" class="m-auto text-gray-400" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    props: {
        id: String
    },
    components: {
        FontAwesomeIcon
    }
}
</script>