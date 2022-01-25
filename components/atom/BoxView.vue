<template>
    <div class="space-y-2">
        <div
            v-for="(item, i) in sorted"
            :key="i"
            class="flex items-center"
        >
            <div :style="`background: ${colors[i]}`" class="w-3 h-3 mr-1"></div>
            <p class="text-gray-500">{{item.name}}, {{item.value}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoxView',
    data: () => ({
        colors: ["#78c1ff", "#5099f4", "#2871cc", "#003f9a", "#468fea", "#78c1ff", "#5099f4", "#2871cc", "#003f9a", "#468fea" ],
    }),
    computed: {
        sorted() {
            return  this.items.sort((a,b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0))
        }
    },
    props: ['items']
}
</script>
