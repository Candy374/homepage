/**
 * Created by huangling on 14/05/2017.
 */

import Vue from 'Vue';
import Header from './components/header.vue';
import './index.css';

Vue.config.debug = true;//开启错误提示
window.onload = function () {
    new Vue({
        el: '#app',
        components: {
            'my-header': Header
        },
        data: {
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
        }
    });
};
