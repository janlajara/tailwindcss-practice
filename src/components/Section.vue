<template>
    <article class="my-4">
        <div class="my-2">
            <h2 class="text-lg">{{$props.heading}}</h2>
            <p class="text-gray-600">{{$props.description}}</p>
        </div>
        <slot/>
    </article>
</template>

<script>
export default {
    props: {
        heading: String,
        description: String
    }
}
</script>