<template>
    <Page title="Notifications">
        <Section heading="Toasts" description="Click any of the buttons to trigger the toasts."
            class="flex">
            <div class="buttons-group flex flex-grow flex-wrap justify-center my-auto">
                <Button type="primary" :action="()=>showToast()">Default</Button>
                <Button type="secondary" :action="()=>showToast('success')">Success</Button>
                <Button type="secondary" :action="()=>showToast('info')">Info</Button>
                <Button type="secondary" :action="()=>showToast('warning')">Warning</Button>
                <Button type="secondary" :action="()=>showToast('error')">Error</Button>
            </div>
        </Section>
        <Section heading="Modals" description="Click any of the buttons to trigger the modals.">

        </Section>
    </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'
import {useToast} from 'vue-toastification'

export default {
    components: {
        Page, Section, Button
    },
    setup(){
        const toast = useToast()
        const showToast = (type='default')=> {
            return toast("Bulaga!", {type})
        }
        return {
            showToast
        }
    }
}
</script>

<style scoped>
.buttons-group button {
    @apply m-2;
}
</style>