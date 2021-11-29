<template>
    <div class="grid grid-cols-4 gap-5">
        <ProfileCard
            v-for="(item, i) in profiles"
            :key=i
            :profile="item"
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProfileCard from '~/components/molecule/GridProfileCard.vue'
export default {
    name: 'TableGridView',
    components: {
        ProfileCard
    },
    computed: {
        ...mapGetters({
            profiles: 'getProfiles'
        })
    }
}
</script>
