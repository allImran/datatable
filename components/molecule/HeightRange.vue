<template>
    <div class="flex items-center justify-between px-3 h-16">
        <div class="flex items-center space-x-2">
        <span class="mr-1 text-sm text-gray-500 font-semibold">Height</span>
            <ArrowRange />
                <span class="font-bold text-2xl">.</span>
            <ArrowRange :startValue="7"/>
        </div>
        <Convarter />
        <div class="flex items-center space-x-2">
            <ArrowRange />
                <span class="font-bold text-2xl">.</span>
            <ArrowRange :startValue="7"/>
        </div>
    </div>
</template>

<script>
import ArrowRange from  '~/components/atom/ArrowRange.vue'
import Convarter from  '~/components/atom/Convarter.vue'
export default {
    name: 'HeightRange',
    components: {
        ArrowRange,
        Convarter
    }
}
</script>
