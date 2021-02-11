<template>
    <button @click="$props.action"  :type="$props.type"
        :title="$refs.buttonText? $refs.buttonText.innerHTML : ''"
        class="flex px-3 py-1 font-bold" 
        :class="[buttonClass, $props.icon? 'rounded-full sm:rounded' : 'rounded']">
        <Icon v-if="$props.icon" :id="$props.icon" class="w-6 text-sm"/>
        <p class="w-full" :class="$props.icon? 'hidden sm:block' : ''" ref="buttonText">
            <slot/>
        </p>
    </button>
</template>

<script>
import Icon from '@/components/Icon.vue'

const button_styles = {
    'primary': 'bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-700',
    'secondary': 'bg-gray-300 hover:bg-gray-200 active:bg-gray-400'
}

export default {
    components: {
        Icon
    },
    props: {
        icon: String,
        type: {
            type: String,
            validator: (value) =>
                ['button', 'submit'].indexOf(value) !== -1
        },
        color: {
            type: String,
            validator: (value) => 
                ['primary', 'secondary'].indexOf(value) !== -1
        },
        action: {
            type: Function,
            required: false
        }
    },
    setup(props) { 
        return { 
            buttonClass: button_styles[props.color]
        }
    }
}
</script>