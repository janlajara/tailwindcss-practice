<template>
    <div class="flex pr-4 mt-2">
        <div class="inline-flex items-center pr-4">
            <input type="radio" :name="name" :value="$props.option"/>
        </div>
        <label class="input-label">{{$props.option}}</label>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        option: String
    }
}
</script>

<style scoped>
@layer components {
  .input-label {
    @apply text-sm font-medium;
  }
}
</style>