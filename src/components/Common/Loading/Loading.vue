<template>
    <transition name="modal">
        <div class="loading" v-show="loading.show">
            <slot>{{loading.s}}</slot>
        </div>
    </transition>
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex'


export default {
    name: 'Loading',
    props: {
        status: {
            type: Boolean
        }
    },
    data() {
        return {}
    },
    computed: {
        ...mapState(['loading'])
    },
    mounted() {

    },
    methods: {
        ...mapMutations(['hideLoading', 'showLoading'])
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
    position: fixed;
    width: 100px;
    height: 100px;
    background-color: #f60;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
}
</style>
