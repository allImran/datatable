<template>
    <div>
        <div class="px-6 pb-5">
            <p class="capitalize text-5xl text-gray-400 font-semibold mt-3">Search result</p>
            <div class="flex justify-between items-center mt-3">
                <p class="text-gray-500 font-semibold text-xl">
                    Matches for your requirements: {{ total }} results
                </p>
                <TopRightBtns />
            </div>
            <div class="flex justify-between items-center mt-5">
                <TableViewChanger />
                <TopRightTags />
            </div>
        </div>
        <div style="height: calc(100vh - 184px); overflow-y: scroll" class="px-4 pb-4">
            <transition name="fade">
                <TableGridView v-if="isGridView" />
                <TableListView v-else />
            </transition>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TopRightBtns from '~/components/molecule/TopRightBtns.vue'
import TableGridView from '~/components/molecule/TableGridView.vue'
import TableListView from '~/components/molecule/TableListView.vue'
import TableViewChanger from '~/components/atom/TableViewChanger.vue'
import TopRightTags from '~/components/molecule/TopRightTags.vue'

export default {
    name: 'Table',
    components: {
        TopRightBtns,
        TableGridView,
        TableListView,
        TableViewChanger,
        TopRightTags
    },
    computed: {
        ...mapGetters({
            isGridView: 'getTableViewType'
        })
    },
    props: {
        total: {
            type: Number,
            default: 0
        }
    }
}
</script>
