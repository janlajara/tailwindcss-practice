<template>
    <div class="flex pr-4 mt-2">
        <div class="inline-flex pr-4"
            :class="$slots.default? 'items-start pt-2' : 'items-center'">
            <input type="checkbox" :name="name" :value="$props.option"/>
        </div>
        <div>
            <label class="input-label">{{$props.label}}</label>
            <p v-if="$slots.default" class="text-sm font-medium text-justify">
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