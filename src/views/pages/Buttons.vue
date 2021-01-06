<template>
    <div>
        <Page title="Buttons">
            <Section heading="Examples of Buttons"
                description="Here are the samples of buttons in various styles."
                class="sm:flex">
                <div id="buttons-group" class="flex flex-grow flex-wrap justify-center my-auto">
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Orange Button</Button>
                    <Button type="secondary">Secondary</Button>
                    <Button type="secondary">White Button</Button>
                </div>
            </Section>
        </Page>
    </div>
</template>

<script>
import Page from '@/components/Page.vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'

export default {
    components: {
        Page, Section, Button
    }
}
</script>

<style scoped>
#buttons-group button {
    @apply m-2;
}
</style>
