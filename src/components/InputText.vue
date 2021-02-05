<template>
    <div class="input">
        <label class="input-label">{{$props.name}}</label>
        <div class="flex rounded-md shadow-sm">
            <span v-if="$props.prefix"
                class="inline-flex items-center px-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-sm">
                {{$props.prefix}}</span>
            <input :type="$props.type" :placeholder="$props.placeholder"
                class="input-field" v-model="$props.value"
                :class="inputBorderStyle"/>
            <span v-if="$props.postfix"
                class="inline-flex items-center px-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-md text-sm">
                {{$props.postfix}}</span>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props: {
        name: String,
        prefix: String,
        postfix: String,
        placeholder: String,
        value: Object,
        type: {
            type: String,
            required: true,
            validator: (value) => {
                return ['text', 'number', 'password'].indexOf(value) !== -1
            }
        },
        required: Boolean,
    },
    setup(props) {
        const inputBorderStyle = ref()

        if (!props.prefix && !props.postfix)
            inputBorderStyle.value = 'rounded'
        else if (props.prefix && !props.postfix)
            inputBorderStyle.value = 'rounded-r-md'
        else if (!props.prefix && props.postfix)
            inputBorderStyle.value = 'rounded-l-md'

        return {
            inputBorderStyle
        }
    }
}
</script>

<style scoped>
@layer components {
  .input {
    @apply mt-2;
  }

  .input-label {
    @apply text-sm font-medium text-gray-700;
  }

  .input-field {
    @apply w-full border-gray-300 text-sm;
  }
}
</style>