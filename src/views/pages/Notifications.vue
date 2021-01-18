<template>
    <Page title="Notifications">
        <Section heading="Toasts" description="Click any of the buttons to trigger the toasts."
            class="block md:flex">
            <div class="buttons-group flex flex-grow flex-wrap justify-center my-auto">
                <Button type="primary" :action="()=>showToast()">Default</Button>
                <Button type="secondary" :action="()=>showToast('success')">Success</Button>
                <Button type="secondary" :action="()=>showToast('info')">Info</Button>
                <Button type="secondary" :action="()=>showToast('warning')">Warning</Button>
                <Button type="secondary" :action="()=>showToast('error')">Error</Button>
            </div>
        </Section>
        <Section heading="Modals" description="Click any of the buttons to trigger the modals.">
            <Modal heading="A Sample Modal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus proin nibh nisl condimentum. Fringilla urna porttitor rhoncus dolor purus. Nam aliquam sem et tortor. Nisl vel pretium lectus quam id. Cras pulvinar mattis nunc sed. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Felis eget nunc lobortis mattis aliquam faucibus. Tincidunt eget nullam non nisi est sit amet facilisis. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nec nam aliquam sem et tortor consequat id. Commodo nulla facilisi nullam vehicula ipsum a. Elementum tempus egestas sed sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.
            </Modal>
        </Section>
    </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import {useToast} from 'vue-toastification'

export default {
    components: {
        Page, Section, Button, Modal
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