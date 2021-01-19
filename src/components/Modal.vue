<template>
    <teleport to="body">
        <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30">
            <div class="modal relative ">
                <header class="modal-header border-b">
                    <h1 class="flex-grow">{{$props.heading}}</h1>
                    <button>
                        <Icon id="close" />
                    </button>
                </header>
                <div class="modal-body pb-6 pb-12 h-96 overflow-y-auto">
                    <slot/>
                </div>
                <footer class="modal-footer border-t justify-end flex-wrap">
                    <Button v-for="(button, index) in $props.buttons" 
                        :key="index" :type="button.type" 
                        :icon="button.icon" :action="button.action" 
                        class="modal-button">
                        {{button.text}}
                    </Button>
                    <Button type="secondary" icon="close" class="modal-button">Cancel</Button>
                </footer>
            </div>
        </div>
    </teleport>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Button from '@/components/Button.vue'

interface ModalButton {

}

export default {
    components: {
        Icon, Button
    },
    props: {
        heading: {
            type: String,
            required: true
        },
        buttons: {
            type: Array,
            required: false
        }
    }
}
</script>

<style scoped>
@layer components {
    .modal {
        @apply w-11/12 sm:w-4/5 md:w-3/5;
        @apply rounded bg-white;
    }
    .modal-body, .modal-footer, .modal-header {
       @apply w-full px-6;
    }
    .modal-footer, .modal-header {
        @apply py-4;
        @apply border-gray-300;
        @apply flex my-auto;
    }
    .modal-button {
        @apply my-1;
    }
    .modal-button:first-child {
        @apply mr-1;
    }
    .modal-button:last-child {
        @apply ml-1;
    }
    .modal-button:not(:first-child):not(:last-child) {
        @apply mx-1;
    }
}
</style>