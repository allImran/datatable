<template>
    <div class="flex justify-end space-x-2">
        <Tag
            @onClickClose="removeTag"
            v-for="(item, i) in tags"
            :key="i"
            :index="i"
            :text="item"
        />
        <a href="#" class="text-red-500 underline">See more...</a>
    </div>
</template>

<script>
import Tag from '~/components/atom/Tag.vue'
import {tags} from '~/data/tag.data'
export default {
    name: 'TopRightTags',
    components: {
        Tag
    },
    data: () => ({
        tags
    }),
    methods: {
        removeTag(index) {
            this.tags.splice(index, 1)
        }
    }
}
</script>
