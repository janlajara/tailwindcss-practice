<template>
    <div class="input">
        <label class="input-label">{{$props.name}}</label>
        <div class="rounded-md shadow-sm">
            <textarea class="rounded input-field"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>