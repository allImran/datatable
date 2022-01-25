<template>
  <DonutComponent :initialValues="initialValues"/>
</template>

<script>
import DonutComponent from '@/components/atom/DonutComponent'
export default {
  name: 'IndexPage',
  components: {
    DonutComponent
  },
  data: () => ({
    // initialValues: [230, 308, 520, 130, 200]
    initialValues: [230, 200]
  })
}
</script>
