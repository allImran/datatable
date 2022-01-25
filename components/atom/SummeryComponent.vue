<template>
    <div style="height: calc(50% - 6px)" class="border-2 border-gray-200">
        <div class="border-b border-gray-200 py-2">
            <p class="capitalize text-center">{{ title }}</p>
        </div>
        <div style="height: calc(100% - 50px)" class="flex justify-center items-center space-x-2 py-2">
            <i 
                class="mdi text-4xl"
                :class="icon"
            ></i>
            <p class="text-3xl">{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SummeryCard',
    
    props: {
        value: {
            default: 5
        },
        title: {
            default: 'Sales'
        },
        icon: {
            default : 'mdi-account'
        }
    }
}
</script>

