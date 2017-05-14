/**
* Created by huangling on 14/05/2017.
*/
<template id="description">
    <section class="description">
        <div class="title row">{{title}}</div>
        <div class="desc">{{desc}}</div>
    </section>
</template>

<script>
    export default {
        props: ['title', 'desc']
    }
</script>

<style lang="less">
    @import "../../less/constants";
    .description {
        .title {
            font-size: 2em;
            color: @text-color-dark1;
            width: 60%;
        }

        .desc {
            color: @text-color-dark5;
            width: 60%;
            font-size: 0.8em;
        }

        .time-line {
            width: 60%;
            margin: 10px 0;
        }
    }
</style>