<template>
    <div class="border-2 border-gray-200">
        <div class="border-b border-gray-200 py-2">
            <p class="capitalize text-center">{{ title }}</p>
        </div>
        <div class="flex justify-center items-center space-y-3">
            <i 
                class="mdi"
                :class="icon"
            ></i>
            <p>{{ value }}</p>
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
            default : 'account'
        }
    }
}
</script>

