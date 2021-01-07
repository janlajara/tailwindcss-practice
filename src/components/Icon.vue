<template>
    <div class="flex">
        <FontAwesomeIcon v-if="$props.id" :icon="$props.id" class="m-auto" />
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