<template>
    <div class="space-y-5">
        <ProfileCard
            v-for="(item, i) in profiles"
            :key=i
            :profile="item"
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProfileCard from '~/components/molecule/ListProfileCard.vue'
export default {
    name: 'TableListView',
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
