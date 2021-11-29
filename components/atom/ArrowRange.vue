<template>
    <div class="flex flex-col justify-center items-center w-5">
        <div @click="handleIncrement" class="cursor-pointer">
            <img class="transform rotate-90 w-4 h-5" src="/images/icons/left-arrow.png" alt="">
        </div>
        <transition name="fade">
        <span class="text-gray-700 font-bold text-xl">{{ startValue }}</span>
        </transition>
        <div @click="handleDecrement" class="cursor-pointer">
            <img class="transform -rotate-90 w-4 h-5" src="/images/icons/left-arrow.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArrowRange',
    methods: {
        handleIncrement() {
            if(this.startValue<this.max) this.startValue++
            return;
        },
        handleDecrement() {
            if(this.startValue>this.min) this.startValue--
            return;
        }
    },
    props: {
        startValue: {
            type: Number,
            default: 5
        },
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 10
        }
    }
}
</script>
