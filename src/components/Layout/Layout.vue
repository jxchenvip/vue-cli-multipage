<template>
    <div class="layout">
        <v-header></v-header>
        <div class="content">
            <v-menu></v-menu>
            <div class="main">
                <slot name="main"></slot>
            </div>
        </div>
        <slot name="layout">
            
        </slot>
        <Loading></Loading>
    </div>
</template>
<script>

import vHeader from 'components/Common/Header/Header'
import vMenu from 'components/Common/Menu/Menu'
import Loading from 'components/Common/Loading/Loading'

export default {
    name: 'Layout',
    components: {
        vHeader,
        vMenu,
        Loading
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content,
.main {
    text-align: left;
    overflow: hidden;
}

.main {
    padding: 20px;
}
</style>
