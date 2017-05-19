<template>
    <div id="app">
        <Layout>
            detail
        </Layout>
    </div>
</template>
<script>
import 'common/css/reset.css';

export default {
    name: 'app',
    components: {

    },
    mounted() {
        this.$store.dispatch('hideLoading');
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
    margin-top: 60px;
}
</style>
