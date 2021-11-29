<template>
    <div class="flex justify-between border-2 border-gray-100 p-0.5 rounded shadow-md hover:border-4 hover:border-blue-400 trasition duration-300">
        <div class="w-2/5"><Profile :profile="profile"/></div>
        
        <div class="flex w-3/5 items-center justify-end space-x-3">
            <Button iconSrc="/images/icons/star.png" text="Shortlist"/>
            <Button iconSrc="/images/icons/team.png" text="Teamlist"/>
            <Button iconSrc="/images/icons/connection.png" text="Connect"/>
            <Button iconSrc="/images/icons/block.png" text="Block" btnBg="bg-pink-600"/>
        </div>
        <ProfileViewBtn />
    </div>
</template>

<script>
import Profile from  '~/components/atom/Profile.vue'
import ProfileViewBtn from '~/components/atom/ProfileViewBtn.vue'
import Button from '~/components/atom/Button.vue'

export default {
    name: 'ProfileCard',
    components: {
        Profile,
        ProfileViewBtn,
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
