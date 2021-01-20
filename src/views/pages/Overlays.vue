<template>
    <Page title="Overlays">
        <Section heading="Toasts" description="Click any of the buttons to trigger the toasts."
            class="block md:flex">
            <div class="buttons-group">
                <Button type="primary" :action="()=>showToast()">Default</Button>
                <Button type="secondary" :action="()=>showToast('success')">Success</Button>
                <Button type="secondary" :action="()=>showToast('info')">Info</Button>
                <Button type="secondary" :action="()=>showToast('warning')">Warning</Button>
                <Button type="secondary" :action="()=>showToast('error')">Error</Button>
            </div>
        </Section>
        <Section heading="Modals" description="Click any of the buttons to trigger the modals."
            class="block md:flex">
            <div class="buttons-group">
                <Button type="primary" @click="()=> toggle(true)">Open modal</Button>
                <Modal heading="A Sample Modal" :is-open="modalIsOpen" @toggle="toggle"
                    :buttons="[
                        {type: 'primary', icon: 'save', text: 'Save', 
                            action: ()=>{showToast('success', 'Record saved.')}},
                        {type: 'secondary', icon: 'delete', text: 'Delete', 
                            action: deleteRecord}
                    ]">
                    <Section heading="Some Fields" description="Here are some fields that you can type on.">
                        <div class="grid lg:grid-cols-2 inputs">
                            <InputText name="Username" type="text" placeholder="abcd1234"/>
                            <InputText name="Price" type="number" prefix="PHP"/>
                            <InputText name="Quantity" type="number" postfix="pieces"/>
                            <InputText name="Website" type="text" prefix="www." postfix=".com"/>
                            <InputTextarea name="Description"/>
                        </div>
                    </Section>
                </Modal>
            </div>
        </Section>
    </Page>
</template>

<script>
import {ref} from 'vue'
import {useToast} from 'vue-toastification'
import Page from '@/components/Page.vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import InputText from '@/components/InputText.vue'
import InputTextarea from '@/components/InputTextarea.vue'

export default {
    components: {
        Page, Section, Button, Modal,
        InputText, InputTextarea
    },
    setup(){
        const toast = useToast()
        const showToast = (type='default', message='Bulaga!')=> {
            return toast(message, {type})
        }
        const modalIsOpen = ref(false)
        const toggle = (value) => {
            modalIsOpen.value = value
        }
        const deleteRecord = ()=> {
            showToast('info', 'Record deleted.')
            toggle(false)
        }

        return {
            showToast, modalIsOpen, toggle, deleteRecord
        }
    }
}
</script>

<style scoped>
@layer components {
    .buttons-group button {
        @apply m-2;
    }
    .buttons-group {
        @apply flex flex-grow flex-wrap justify-center my-auto;
    }
    .inputs > *:nth-child(odd) {
        @apply lg:mr-2;
    }
    .inputs > *:nth-child(even) {
        @apply lg:ml-2;
    }
}
</style>