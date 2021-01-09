<template>
    <div class="input">
        <label class="input-label">{{$props.name}}</label>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>