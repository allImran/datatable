<template>
  <div class="container p-20 mx-auto bg-blue-200 h-screen overflow-y-auto">
        <p class="uppercase text-blue-500 text-5xl text-center mb-10">workspacify</p>
        <div class="grid gap-3 grid-cols-6 p-10 bg-white rounded-3xl">
            <div class="space-y-3">
              <SummeryComponent />
              <SummeryComponent title="support assistant"/>
            </div>
            <div class="border-2 border-gray-200 col-span-3 p-3">
                <div>
                  <p class="uppercase text-lg text-gray-500 font-semibold">sales status</p>
                  <div class="flex justify-center items-center space-x-4">
                    <DonutComponent :initialValues="initialValues"/>
                    <BoxView :items="initialValues" />
                  </div>
                </div>
            </div>
            <div class="border-2 border-gray-200 col-span-2 p-3">
              <p class="uppercase text-lg font-semibold text-gray-500">accounts insights</p>
            </div>
        </div>
    </div>
</template>

<script>
import DonutComponent from '@/components/atom/DonutComponent'
import SummeryComponent from '@/components/atom/SummeryComponent'
import BoxView from '@/components/atom/BoxView'

export default {
  name: 'IndexPage',
  components: {
    DonutComponent,
    SummeryComponent,
    BoxView
  },
  data: () => ({
    initialValues: [
      {
        name: 'News',
        value: 10
      },
      {
        name: 'Reserved',
        value: 5
      },
      {
        name: 'Sold',
        value: 20
      },
      {
        name: 'Other',
        value: 12
      }
    ]
  })
}
</script>
