<template>
    <div>
        <ButtonBorder text="Manage Filter" iconSrc="/images/icons/menu-white.png"/>
        <ButtonBorder text="Advanced Search"/>
    </div>
</template>

<script>
import ButtonBorder from '~/components/atom/ButtonBorder'

export default {
    name : 'TopRightButtons',
    components: {
        ButtonBorder
    }
}
</script>
