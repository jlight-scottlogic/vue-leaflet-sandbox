<template>
    <Display :countries="countries"></Display>
</template>

<script>
import Display from './country-list-display.vue'

export default {
  name: 'country-list',
  data: () => ({
    countries: [
      { id: 1, name: 'England' },
      { id: 2, name: 'Ireland' },
      { id: 3, name: 'Scotland' },
      { id: 4, name: 'Wales' }
    ]
  }),
  components: { Display }
}
</script>
