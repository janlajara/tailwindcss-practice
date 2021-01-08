<template>
    <div>
        <Page title="Forms">
            <Section heading="Profile" >
                <InputText name="Username" type="text" placeholder="abcd1234"/>
                <InputText name="Price" type="number" prefix="PHP"/>
                <InputText name="Quantity" type="number" postfix="pieces"/>
                <InputText name="Website" type="text" prefix="www." postfix=".com"/>
            </Section>
        </Page>
    </div>
</template>

<script>
import Page from '@/components/Page.vue'
import Section from '@/components/Section.vue'
import InputText from '@/components/InputText.vue'

export default {
    components: {
        Page, Section, InputText
    }
}
</script>