<template>
    <button
        @click="viewProfileDetail"
        class="bg-primary ml-8 text-gray-100 rounded-r-md w-52 text-center"
    >
        View profile
    </button>
</template>

<script>
export default {
    name: 'ProfileViewButton',
    methods: {
        viewProfileDetail() {
            //
        }
    },
    props: {
        profileId: {
            type: Number
        }
    }
}
</script>


