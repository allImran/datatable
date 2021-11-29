<template>
    <button class="bg-primary  text-white rounded-full p-0.5">
    <div class="border-2 border-white rounded-full px-5 py-0.5">
        <div class="flex items-center justify-center">
            <img 
                v-if="isIconLeft"
                :src="iconSrc" 
                alt="search"
                :class="iconStyle"
            >
            <p :class="textStyle">{{text}}</p>
            <img
                v-if="!isIconLeft"
                :src="iconSrc" 
                alt="search"
                :class="iconStyle"
            >
        </div>
    </div>
    </button>
</template>

<script>
export default {
    name: 'ButtonBorder',
    props: {
        text: {
            type: String,
            default: 'Button'
        },
        iconSrc: {
            type: String,
            default: '/images/icons/search.png'
        },
        iconStyle: {
            type: String,
            default: 'h-5'
        },
        isIconLeft: {
            type: Boolean,
            default: false
        },
        eventName: {
            type: String,
            default: ''
        },

        textStyle: {
            type: String,
            default: 'text-2xl mr-3'
        }
    }
}
</script>
