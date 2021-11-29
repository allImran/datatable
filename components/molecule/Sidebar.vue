<template>
    <transition name="fade" >
        <div v-if="showSidebar" class="w-96 shadow-lg h-full rounded overflow-y-auto">
            <Top />
            <div class="flex justify-center mt-5 space-x-2">
                <Button
                    text="Save Search"
                    iconSrc="/images/icons/search.png"
                    iconStyle="h-4 mr-3"
                    textStyle="text-lg"
                />
                <Button
                    text="Load Saved Search"
                    iconSrc="/images/icons/search.png"
                    iconStyle="h-4 mr-3"
                    textStyle="text-lg"
                />
            </div>

            <div class="px-3 my-4"><hr></div>
            <HeightRange />

            <div class="px-3 my-4"><hr></div>

            <div class="p-3 space-y-4">
                <Dropdown
                    v-for="(item, i) in options"
                    :key="i"
                    :type="item"
                    :optionArr="filters[item]"
                />
            </div>
            <TagCreateArea />
            <Bottomsearch />
        </div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {filters} from '~/data/filter.data'
import Top from '~/components/atom/Top.vue'
import Button from  '~/components/atom/Button.vue'
import Dropdown from '~/components/atom/Dropdown.vue'
import Bottomsearch from '~/components/molecule/Bottomsearch.vue'
import HeightRange from '~/components/molecule/HeightRange.vue'
import TagCreateArea from '~/components/molecule/TagCreateArea.vue'

export default {
    name: 'Sidebar',
    components: {
        Top,
        Button,
        Dropdown,
        Bottomsearch,
        HeightRange,
        TagCreateArea
    },
    data: () => ({
        filters
    }),
    
    computed: {
        ...mapGetters({
            showSidebar: 'getSidebarStatus'
        }),
        options() {
            return Object.keys(this.filters)
        }
    }
}
</script>
  
