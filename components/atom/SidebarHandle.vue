<template>
    <div class="cursor-pointer">
        <transition name="fade">
        <div 
            v-if="showSidebar" 
            @click="setSidebarStatus(false)" 
            class="absolute top-8 -right-1"
        >
            <div class="relative left">
                <img src="/images/icons/left-arrow-white.png" 
                class="h-4 absolute top-5 left-2" alt="">
            </div>
        </div>
        </transition>

        <transition name="fade" >
        <div 
            v-if="!showSidebar" 
            @click="setSidebarStatus(true)" 
            class="absolute top-8 opacity-40 hover:opacity-90 transition duration-300 -right-5"
        >
            <div class="right">
                <img src="/images/icons/left-arrow-white.png" 
                class="h-4 transform rotate-180 absolute top-6 left-1" alt="">
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'SidebarHandle',
    computed: {
        ...mapGetters({
            showSidebar: 'getSidebarStatus'
        })
    },

    methods: {
        ...mapMutations({
           setSidebarStatus : 'setSidebarStatus'
        })
    }

}
</script>


<style scoped>
   
.right,
.left {
  height: 60px;
  width: 30px;
  background: #6158a7;
  display: inline-block;
  margin: 0 1em 1em 0;
}


.right {
  border-bottom-right-radius: 60px;
  border-top-right-radius: 60px;
  border: 1px solid white;
}


.left {
    border-bottom-left-radius: 60px;
    border-top-left-radius: 60px;
    border: 1px solid white;
}
</style>