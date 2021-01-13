<template>
    <div>
        <Page title="Tables">
            <Section heading="Regular" description="Here is an example of a regular table.">
                <Table 
                    :headers="['Last name', 'First name', 'Middle name', 'Age', 'Profile']"
                    :rows="[['Lajara', 'Jan Eleazar', 'Mamonong', 32, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
                            ['Laranja', 'Janelli', 'Azar', 18, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']]"/>
            </Section>
            <Section heading="Other Format" 
                description="Here is an example of a table with another layout.">
                <Table 
                    :headers="['Select', 'Record', 'Description', 'Quantity', '']">
                    <Row v-for="(count, key) in 3" :key="key">
                        <Cell>
                            <InputCheckbox name="row" :option="'option-'+count"/>    
                        </Cell>
                        <Cell>Some Record</Cell>
                        <Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Cell>
                        <Cell>{{count*11}}</Cell>
                        <Cell>Edit</Cell>
                    </Row>
                </Table>
            </Section>
        </Page>
    </div>
</template>

<script>
import Section from '@/components/Section.vue'
import Page from '@/components/Page.vue'
import Table from '@/components/Table.vue'
import Row from '@/components/Row.vue'
import Cell from '@/components/Cell.vue'
import InputCheckbox from '@/components/InputCheckbox.vue'

export default {
    components: {
        Section, Page, Table, Row, Cell, InputCheckbox
    }
}
</script>