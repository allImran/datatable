<template>
    <div>
        <div :class="tagBg" class="flex justify-center items-center rounded-full px-2">
            <p :class="textStyle">{{ text }}</p>
            <img 
                @click="$emit('onClickClose', index)" 
                :src="imgSrc" 
                class="w-2 cursor-pointer" alt=""
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        tagBg: {
            type: String,
            default: 'bg-primary-light'
        },
        text: {
            type: String
        },
        textStyle: {
            type: String,
            default: 'text-gray-100 mr-2'
        },
        index: {
            type: Number
        },
        imgSrc: {
            type: String,
            default: '/images/icons/close-white.png'
        }
    }
}
</script>
