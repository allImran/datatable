<template>
    <div class="text-center">
        <div>
            <Button
                eventName="onClickSearch"
                text="Search"
                btnStyle="px-6 border-4 py-2 w-64"
                iconStyle="h-8 mr-3"
                textStyle="text-2xl ml-2"
                @onClickSearch="performSearch"
            />
        </div>
        <a class="text-primary underline text-lg mt-2 inline-block" href="#">Advanced Search</a>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import { readProfileData } from '~/services/firebase/firebase.util'
import Button from '~/components/atom/Button.vue'
export default {
    name: 'BottomSearch',
    components: {
        Button
    },
    computed: {
        ...mapGetters({
            query: 'getQuery'
        })
    },
    methods: {
        ...mapMutations({
            setProfiles: 'setProfiles',
            setFetchStatus: 'setFetchStatus'
        }),
        async performSearch() {
            this.setFetchStatus(true)
            let data = await readProfileData('profiles', this.query)
            this.setFetchStatus(false)
            this.setProfiles(data)
        }
    }
}
</script>
