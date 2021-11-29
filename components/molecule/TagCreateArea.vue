<template>
    <div class="p-3 mb-2">
        <p class="capitalize font-semibold text-primary text-center mb-2">tags</p>
        <div class="flex border border-gray-400 rounded-md h-20">
            <div class="w-full p-2">
                <Tag
                    tagBg="bg-gray-200"
                    class="inline-block"
                    imgSrc="/images/icons/close.png"
                    text="Non Smoker"
                    textStyle="text-primary mr-2"
                />
            </div>
            <div class="space-x-2 flex items-center justify-center w-16">
                <img class="h-4" src="/images/icons/close.png" alt="">
                <img class="h-5" src="/images/icons/bottom-arrow.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Tag from '~/components/atom/Tag.vue'
export default {
    name: 'TagCreateArea',
    components: {
        Tag
    }
}
</script>
