<template>
    <div>
        <Page title="Tables">
            <Section heading="Regular" description="Here is an example of a regular table.">
                <Table 
                    :headers="['Last name', 'First name', 'Middle name', 'Age']"
                    :rows="[['Lajara', 'Jan Eleazar', 'Mamonong', 32],
                            ['Lahara', 'John Eli', 'Mamarunong', 18],]"/>
            </Section>
            <Section heading="Interactive" description="Here is an example of a table with interactive values.">
                <Table 
                    :headers="['Last name', 'First name', 'Middle name', 'Age']"
                    :rows="[['Lajara', 'Jan Eleazar', 'Mamonong', 33],
                            ['Lahara', 'John Eli', 'Mamarunong', 18],]">
                </Table>
            </Section>
        </Page>
    </div>
</template>

<script>
import Section from '@/components/Section.vue'
import Page from '@/components/Page.vue'
import Table from '@/components/Table.vue'

export default {
    components: {
        Section, Page, Table
    }
}
</script>