/**
* Created by huangling on 14/05/2017.
*/
<template id="category">
    <section class="category justify-between margin-horizontal-large direction-row">
        <div class="block" v-for="block in cate[blocks]">
            <figure>
                <svg>
                    <image preserveAspectRatio="none" x="0px" y="0px" :xlink:href="block.svg"/>
                </svg>
            </figure>
            <div class="title">{{block.title}}</div>
            <div class="desc">{{block.desc}}</div>
        </div>
    </section>
</template>

<script>
    import * as SVG from '../constants/svg';

    const homepage = [{
        title: '人&数据',
        desc: '全渠道打通，接入客户的浏览数据、行为数据、消费数据、资料数据、消费相关的商品数据。对接入数据进行建模分析，绘制出每一个客户的360度画像。',
        svg: SVG.people_data
    }, {
        title: '内容&交互',
        desc: '通过低使用门栏的内容制作工具，快速生产营销内容和物料，覆盖微信、短信、邮件、微页面等多种形式。用户与内容交互后，数据自动被收集。',
        svg: SVG.content_interaction
    }, {
        title: '策略&自动化',
        desc: '所见即所得的自动流程设计器，可以让你的运营策略简单快速的变成机器可以读懂的命令，从而程序化执行并输出执行报表。大大提高运营效率。',
        svg: SVG.people_data
    }];

    const cate = {
        homepage
    };

    export default {
       props: ['blocks'],
        data: (e) => {
            return {
                cate
            }
        }
    }
</script>
<style lang="less">
    @import "../../less/constants";

    .category {
        flex-wrap: wrap;
        flex-direction: row;

        .block {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            min-height: 200px;
            margin: 0 1.5%;

            &.align-start {
                align-items: flex-start;
            }

            .title {
                font-size: 1.5em;
                margin: 10px 0;
            }

            .desc {
                color: @text-color-dark5;
            }
        }
    }
</style>