/**
* Created by huangling on 14/05/2017.
*/
<template id="footer">
    <footer>
        <div class="row justify-between">
            <div class="row">
                <div class="logo">
                    <img src="../../assets/logo_footer.png"/>
                </div>
                <div class="row align-start">
                    <div class="block" v-for="column in links">
                        <a class="link" v-for="link in column">
                            {{link.label}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="contact">
                <div><img src="../../assets/phone.png"/>400 850 9918</div>
                <div><img src="../../assets/wechat.png"/>微信公众号</div>
                <div><img src="../../assets/weibo.png"/>官方微博</div>
            </div>
        </div>

        <div class="copyright">
            <address>Copyrights © 2016 上海欣兆阳信息科技有限公司</address>
            <span>备案信息:沪ICP备15038423号-1</span>
        </div>
    </footer>
</template>

<script>
    export default {
        data: () => {
            return {
                links: [
                    [{
                        label: '首页',
                        url: ''
                    }, {
                        label: '关于我们',
                        url: ''
                    }, {
                        label: '产品更新',
                        url: ''
                    }],
                    [{
                        label: '人&数据',
                        url: ''
                    }, {
                        label: '内容&交互',
                        url: ''
                    }, {
                        label: '策略&自动化',
                        url: ''
                    }, {
                        label: '数据洞察',
                        url: ''
                    }],
                    [{
                        label: '合作伙伴',
                        url: ''
                    }, {
                        label: '营销学堂',
                        url: ''
                    }, {
                        label: '博客',
                        url: ''
                    }]
                ],
                contact: {
                    phone: '账号登录',
                    classes: 'btn btn-default'
                }
            }
        }
    }
</script>
<style lang="less">
    @import "../../less/constants";

    footer {
        display: flex;
        flex-direction: column;
        background: @background-color;
        padding: 0 40px;
        border-top: 1px solid @background-color-light-2;

        .logo {
            margin: 15px 0;
            align-self: flex-start;

            img {
                width: 100px;
            }
        }

        .contact {
            margin-top: 20px;
            align-self: flex-start;
            div {
                color: @text-color-dark5;
            }

            img {
                width: 1em;
                height: 1em;
                margin-right: 1em;
            }
        }

        .desc {
            color: @text-color-dark5;
            font-style: italic;
        }

        .copyright {
            border-top: 1px solid @background-color-light-2;
            display: flex;
            padding: 20px 0;

            address {
                margin-right: 40px;
                color: @text-color-dark5;
                font-style: normal;
            }

            span {
                color: @text-color-dark5;
            }
        }

        .block {
            display: flex;
            flex-direction: column;
            margin: 0 20px;

            .link {
                color: @text-color-dark5;

                &:hover {
                    color: @text-color-dark2;
                }
            }
        }
    }
</style>