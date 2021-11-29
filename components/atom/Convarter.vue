<template>
    <div class="h-full">
        <div class="flex space-x-1">
            <Button
                btnStyle="px-3 h-4"
                text="Ft"
                :showIcon="false"
                textStyle="text-xs"
            />
            <Button
                btnStyle="px-3 h-4"
                text="Cm"
                textStyle="text-xs text-primary"
                :showIcon="false"
                btnBg="bg-white"
            />
        </div>
        <div class="flex justify-center">
            <p class="to">To</p>
        </div>
    </div>
</template>

<script>
import Button from '~/components/atom/Button.vue'
export default {
    name: 'Converter',
    components: {
        Button
    }
}
</script>

<style scoped>
    .to{
        position: relative;
    }
    .to::after{
        content: "";
        position: absolute;
        height: 5px;
        border-bottom: 1px solid black;
        top: 9px;
        left: 25px;
        width: 30px;
    }
    .to::before{
        content: "";
        position: absolute;
        height: 5px;
        border-bottom: 1px solid black;
        top: 9px;
        right: 25px;
        width: 30px;
    }
</style>
