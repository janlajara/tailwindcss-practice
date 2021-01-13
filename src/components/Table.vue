<template>
    <div class="my-4 border border-gray-300 rounded-md overflow-hidden">
        <table class="divide-y divide-gray-200 table-auto">
            <thead class="hidden lg:table-header-group">
                <Row class="bg-gray-100">
                    <th v-for="(header, key) in $props.headers" :key="key" 
                        class="px-3 py-3 sm:px-6 text-left text-xs text-gray-700 
                            uppercase font-bold">{{header}}</th>
                </Row>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <Row v-for="(row, key1) in $props.rows" :key="key1"
                    class="flex flex-wrap lg:table-row row hover:bg-gray-50">
                    <Cell  v-for="(col, key2) in row.splice(0, columnCount)" 
                        :key="key2" class="block lg:table-cell">
                        <label class="font-bold text-xs block lg:hidden">{{$props.headers[key2]}}</label>
                        <span>{{col}}</span>
                    </Cell>
                </Row>
                <slot/>
            </tbody>
        </table>
    </div>
</template>

<script>
import {computed} from 'vue'
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
        rows: Array
    },
    setup(props){
        const columnCount = computed(()=> props.headers.length)
        return {
            columnCount
        }
    }
}
</script>
