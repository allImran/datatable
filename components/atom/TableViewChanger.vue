<template>
    <div>
        <div class="flex space-x-5">
            <button
                @click="setTableViewType(true)"
                class="hover:opacity-100 opacity-90 transition duration-300"
            >
                <div>
                    <img v-if="!isGridView" src="/images/icons/menu-grid.png" class="h-8" alt="">
                    <img v-else src="/images/icons/menu-grid-white.png" class="h-10 bg-primary p-1 rounded" alt="">
                </div>
            </button>
            <button
                 @click="setTableViewType(false)"
                class="hover:opacity-100 opacity-90 transition duration-300"
            >
                <div>
                    <img v-if="isGridView" src="/images/icons/menu-list.png" class="h-8" alt="">
                    <img v-else src="/images/icons/menu-white.png" class="h-10 bg-primary p-1 rounded" alt="">
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'TableViewChanger',
    computed: {
        ...mapGetters({
            isGridView: 'getTableViewType'
        })
    },
    methods: {
        ...mapMutations({
            setTableViewType:'setTableViewType'
        })
    }
}
</script>
