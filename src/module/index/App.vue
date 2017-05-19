<template>
    <div id="app">
        <Layout>
            {{count}}
            <a href="" @click.stop.prevent="aaa">aaaaaaaaaa</a>
            <a href="" @click.stop.prevent="bbb">bbbbbbbbbb</a>
        </Layout>
    </div>
</template>
<script>
import 'common/css/reset.css';

export default {
    name: 'app',
    data() {
        return {}
    },
    computed: {

    },
    mounted() {
        this.axios('http://localhost:8080/module/detail.html').then((d) => {
            this.$store.dispatch('hideLoading');
        })
    },
    methods: {
        aaa() {
            this.$store.dispatch('hideLoading')
        },
        bbb() {
            this.$store.dispatch('showLoading')
        }
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
