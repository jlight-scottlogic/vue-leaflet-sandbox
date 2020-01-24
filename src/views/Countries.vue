<template>
  <div>
    <h1>Countries</h1>
    <CountriesList></CountriesList>
  </div>
</template>

<script>
import CountriesList from '@/components/countries/country-list.vue'

export default {
  name: 'countries',
  data: () => ({
    countries: [
      { id: 1, name: 'England' },
      { id: 2, name: 'Ireland' },
      { id: 3, name: 'Scotland' },
      { id: 4, name: 'Wales' }
    ]
  }),
  components: { CountriesList }
}
</script>

<style>
table {
  margin: auto;
}
</style>
