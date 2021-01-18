<template>
    <teleport to="body">
        <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30">
            <div class="rounded bg-white w-11/12 sm:w-4/5 md:w-3/5 h-5/6 md:h-4/5 relative overflow-x-hidden overflow-y-auto">
                <div class="h-20">
                    <header class="rounded-t bg-white fixed w-11/12 sm:w-4/5 md:w-3/5
                        flex px-6 py-4 margin-auto border-gray-300 border-b">
                        <h1 class="flex-grow">{{$props.heading}}</h1>
                        <button>
                            <Icon id="close" />
                        </button>
                    </header>
                </div>
                <div class="px-6 pb-6 pb-12 rounded">
                    <slot/>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
    components: {
        Icon
    },
    props: {
        heading: {
            type: String,
            required: true
        }
    }
}
</script>