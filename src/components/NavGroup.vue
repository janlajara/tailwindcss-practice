<template>
    <div class="pt-2 pb-2">
        <label class="uppercase text-xs">{{$props.name}}</label>
        <slot/>
        <hr/>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>