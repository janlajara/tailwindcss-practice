<template>
    <div class="input">
        <label class="input-label">{{$props.name}}</label>
        <div class="rounded-md shadow-sm">
            <select class="rounded input-field">
                <option disabled value="">Select</option>
                <option v-for="option in $props.options" :key="option.value">
                    {{option.label}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        options: {
            type: Array
        }
    }
}
</script>