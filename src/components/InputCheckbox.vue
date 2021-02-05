<template>
    <div class="flex pr-4 mt-2">
        <div class="inline-flex pr-4"
            :class="$slots.default? 'items-start pt-2' : 'items-center'">
            <input type="checkbox" :name="name" :value="$props.option"/>
        </div>
        <div v-if="$props.label">
            <label class="input-label">{{$props.label}}</label>
            <p v-if="$slots.default" class="text-sm font-medium text-justify text-gray-600">
                <slot/>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        option: String,
        label: String
    }
}
</script>

<style scoped>
@layer components {
  .input-label {
    @apply text-sm font-medium text-gray-700;
  }
}
</style>