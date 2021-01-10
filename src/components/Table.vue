<template>
    <div class="my-4 border border-gray-300 rounded-md overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 table-auto">
            <thead class="bg-gray-50">
                <Row>
                    <th v-for="(header, key) in $props.headers" :key="key" 
                        class="px-3 py-3 sm:px-6 text-left text-xs text-gray-700 
                            uppercase font-medium">{{header}}</th>
                </Row>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <Row v-for="(row, key1) in $props.rows" :key="key1">
                    <Cell  v-for="(col, key2) in row" :key="key2">{{col}}</Cell>
                </Row>
                <slot/>
            </tbody>
        </table>
    </div>
</template>

<script>
import Row from '@/components/Row.vue'
import Cell from '@/components/Cell.vue'

export default {
    components: {
        Row, Cell
    },
    props: {
        headers: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        }
    }
}
</script>
