<template>
    <div class="menu">
        <ul>
            <li v-for="(item, index) in menu.list" key="index">
                <a :href="item.link">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex'


const menu = [{
    link: '/menu1',
    title: 'menu1'
}, {
    link: '/menu2',
    title: 'menu2'
}, {
    link: '/menu3',
    title: 'menu3'
}];


export default {
    name: 'Menu',
    data() {
        return {
            msg: 'this is menu',
            menus: [{
                link: '/menu1',
                title: 'menu1'
            }, {
                link: '/menu2',
                title: 'menu2'
            }, {
                link: '/menu3',
                title: 'menu3'
            }]
        }
    },
    computed: {
        ...mapState(['menu'])
    },
    mounted() {
        this.$store.dispatch('set_menu', menu);
    },

    methods: {
        ...mapMutations(['set_menu'])
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
    float: left;
    width: 300px;
    height: 1000px;
    border: 1px solid #000;
}
</style>
