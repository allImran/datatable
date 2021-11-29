<template>
  <div class="flex">
    <div class="relative p-3 h-screen">
      <Sidebar />
      <SidebarHandle />
    </div>
    <div class="w-full h-screen overflow-hidden">
      <Table :total="totalProfile" />
    </div>
    <Loader v-if="isDataFetching"/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import { readProfileData } from '~/services/firebase/firebase.util'
import Sidebar from '~/components/molecule/Sidebar'
import SidebarHandle from '~/components/atom/SidebarHandle.vue'
import Table from '~/components/molecule/Table'
import Loader from '~/components/atom/Loader'

export default {
  name: 'AppIndex',
  layout: 'app',
  components: {
    Sidebar,
    SidebarHandle,
    Table,
    Loader
  },
  computed: {
    ...mapGetters({
      profiles: 'getProfiles',
      isDataFetching: 'getFetchStatus',
      totalProfile: 'getProfileCount'
    })
  },
  methods: {
    ...mapMutations({
      setProfiles: 'setProfiles',
      setFetchStatus: 'setFetchStatus'
    }),
    async fetchProfiles() {
      this.setFetchStatus(true)
      let data = await readProfileData('profiles');
      this.setFetchStatus(false)
      this.setProfiles(data)
    }
  },
  mounted() {
   this.fetchProfiles()
  }
}
</script>
