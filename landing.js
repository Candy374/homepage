/**
 * Created by huangling on 13/05/2017.
 */
new Vue({
    el: '#app',
    data: {
        header: {
            logo: {
                url: 'https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png'
            },
            nav: {
                links: [{
                    label: '功能'
                }, {
                    label: '我们'
                }, {
                    label: '学堂'
                }],
                classes: 'nav-item'
            },
            login: {
                label: '账号登录',
                classes: 'btn btn-default'
            }
        },
        contents: {
            landing: {
                title: '让营销变得简单',
                desc: '企业一站式营销云'
            },
            apply: {
                label: '申请试用',
                classes: 'btn btn-danger'
            }
        }

    },
    computed: {
        compiledMarkdown: function () {
            return this.input
        }
    },
    methods: {
        update: function (e) {
            this.input = e.target.value
        }
    }
});
