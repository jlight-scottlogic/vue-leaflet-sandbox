<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="country in countries" :key="country.id">
        <td>{{ country.id }}</td>
        <td>{{ country.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'country-list-display',
  props: {
    countries: Array
  },
  components: {}
}
</script>

<style>
table {
  margin: auto;
}
</style>
