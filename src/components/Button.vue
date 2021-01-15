<template>
    <button class="flex px-3 py-1 font-bold rounded border" :class="buttonClass">
        <slot name="icon"/>
        <slot/>
    </button>
</template>

<script>
const button_styles = {
    'primary': ['bg-yellow-500 border-yellow-600 hover:bg-yellow-400 hover:border-yellow-500 active:bg-yellow-700'],
    'secondary': ['bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-200 active:bg-gray-300']
}

export default {
    props: {
        type: String,
            validator: (value) => {
                return ['primary', 'secondary'].indexOf(value) !== -1
            },
        action: {
            type: Function,
            required: false
        }
    },
    setup(props) { 
        return { 
            buttonClass: button_styles[props.type]
        }
    }
}
</script>