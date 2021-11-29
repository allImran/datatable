<template>
    <div>
        <div class="flex items-center">
        <img
            class="w-14 h-14 block rounded mr-3"
            src="/images/profile-photo.jpg" 
            alt=""
        >
        <div>
            <p class="text-gray-500 text-xl font-semibold">{{ profile.name }}</p>
            <p class="text-sm font-semibold text-gray-400 ">
                {{profile.country}},
                {{profile.city}},
                {{profile.age}} Yrs,
                {{profile.religion}} 
            </p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        profile: {
            type: Object,
            required: true
        }
    }
}
</script>
