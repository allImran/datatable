<template>
    <div class="">
        <div class="relative border hover:border-blue-400 p-3 rounded border-gray-50 shadow h-64">
            <Profile :profile="profile"/>
            <Button
                class="absolute bottom-3 bg-opacity-30 hover:bg-opacity-100"
                textStyle="text-ceneter mx-5"
                text="View Profile"
                :showIcon="false"
            />
        </div>
    </div>
</template>

<script>
import Button from '~/components/atom/Button.vue'
import Profile from  '~/components/atom/Profile.vue'

export default {
    name: 'ProfileCard',
    components: {
        Profile,
        Button
    },
    props: {
        profile: {
            type: Object,
            required: true
        }
    }
}
</script>
