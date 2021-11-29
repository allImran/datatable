<template>
    <button 
        :class="[btnDefaultstyle, btnStyle, btnBg]"
        @click="$emit(eventName)"
    >
        <div class="flex items-center justify-center">
            <img
                v-if="showIcon"
                :src="iconSrc" 
                alt="search"
                :class="iconStyle"
            >
            <p :class="textStyle">{{text}}</p>
        </div>
    </button>
</template>

<script>
export default {
    name: 'ButtonBorder',
    data: () => ({
        btnDefaultstyle: 'opacity-90 border-gray-50 shadow text-white rounded-full hover:opacity-100'
    }),
    props: {
        btnStyle: {
            type: String,
            default: 'px-2 border-2'
        },
        btnBg: {
            type: String,
            default: 'bg-primary'
        },
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
            default: 'h-3 mr-2'
        },
        isIconLeft: {
            type: Boolean,
            default: false
        },
        eventName: {
            type: String,
            default: ''
        },
        showIcon: {
            type: Boolean,
            default: true
        },
        textStyle: {
            type: String,
            default: 'text-md mr-3'
        }
    }
}
</script>
