<template>
    <div>
        <Page title="Buttons">
            <Section heading="Regular Buttons"
                description="Here are the samples of regular buttons in various styles."
                class="sm:flex">
                <div class="buttons-group flex flex-grow flex-wrap justify-center my-auto">
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Orange Button</Button>
                    <Button type="secondary">Secondary</Button>
                    <Button type="secondary">White Button</Button>
                </div>
            </Section>
            <Section heading="Buttons with Icon"
                description="Here are the samples of buttons with icon in various styles."
                class="sm:flex">
                <div class="buttons-group flex flex-grow flex-wrap justify-center my-auto">
                    <Button type="primary">
                        Kagat!<template v-slot:icon><Icon id="restaurant" class="w-6 text-sm"/></template>
                    </Button>
                    <Button type="secondary">
                        Download<template v-slot:icon><Icon id="download" class="w-6 text-xs"/></template>
                    </Button>
                    <Button type="secondary">
                        Delete<template v-slot:icon><Icon id="close" class="w-6 text-xs"/></template>
                    </Button>
                </div>
            </Section>
        </Page>
    </div>
</template>

<script>
import Page from '@/components/Page.vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'

import Icon from '@/components/Icon.vue'

export default {
    components: {
        Page, Section, Button, Icon
    }
}
</script>

<style scoped>
.buttons-group button {
    @apply m-2;
}
</style>
