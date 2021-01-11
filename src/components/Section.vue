<template>
    <article class="my-4">
        <div v-if="$props.heading" class="my-2">
            <h2 class="text-lg">{{$props.heading}}</h2>
            <p v-if="$props.description" class="text-gray-600 mb-4">{{$props.description}}</p>
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