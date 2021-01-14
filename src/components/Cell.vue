<template>
    <td class="px-2 py-3 lg:px-6 text-sm text-gray-600 align-top block lg:table-cell">
        <label class="font-bold text-xs block lg:hidden">{{$props.label}}</label>
        <span><slot/></span>
    </td>
</template>

<script>
export default {
    name: 'Cell',
    props: ['label']
}
</script>