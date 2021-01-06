<template>
    <div class="mx-8 py-4 md:mx-16 md:py-8">
        <h1>{{$props.title}}</h1>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>