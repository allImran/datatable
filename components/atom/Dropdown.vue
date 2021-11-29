<template>
<div class="relative">
    <div @click="menuActive = !menuActive" class="border border-primary rounded-full flex p-1 cursor-pointer">
        <div class="w-full p-1 bg-gray-200 text-center text-primary rounded-full">
            <p class="capitalize">{{ selected || type }}</p>
        </div>
        <div class="w-14 flex items-center justify-center">
            <img src="/images/icons/bottom-arrow.png" class="w-4" alt="">
        </div> 
    </div>
    <div v-if="menuActive" @click="menuActive = false" class="fixed inset-0 bg-gray-500 bg-opacity-0 z-10"></div>
    <div v-if="menuActive" class="rounded w-full shadow-md px-5 absolute top-14 bg-white z-20 left-0">
        <ul>
            <li 
                class="capitalize text-gray-400 hover:text-primary cursor-pointer" 
                @click="handleSelect(type)">{{ type }}
            </li>
            <li
                class="hover:text-primary cursor-pointer text-gray-400"
                @click="handleSelect(item)" 
                v-for="(item, i) in optionArr" 
                :key="i"
            > {{ item }}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name :'Dropdown',
    data: () => ({
        selected: '',
        menuActive: false
    }),
    methods: {
        ...mapMutations({
            setQuery:"setQuery"
        }),
        handleSelect(item) {
            this.menuActive = false
            this.selected = item
            let data = {}
            if(item == this.type) {
                data.value = null
            } else {
                data.value = this.selected
            }
            data.key = this.type
            this.setQuery(data)
        }
    },
    props: {
        type: {
            type: String,
            required: true
        },
        optionArr: {
            type: Array,
            required: true
        }
    }
}
</script>
