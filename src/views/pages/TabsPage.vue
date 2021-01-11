<template>
    <Page title="Tabs">
        <Tabs>
            <Tab title="General">
                <Section>
                    General tab content goes here.
                </Section>
            </Tab>
            <Tab title="Advanced">
                <Section>
                    Advanced tab content goes here.
                </Section>
            </Tab>
            <Tab title="Miscellaneous">
                <Section>
                    Miscellaneous tab content goes here.
                </Section>
            </Tab>
        </Tabs>
    </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'
import Section from '@/components/Section.vue'

export default {
    components: {
        Page, Tabs, Tab, Section
    }
}
</script>