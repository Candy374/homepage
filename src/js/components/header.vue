/**
* Created by huangling on 14/05/2017.
*/
<template id="header">
    <header>
        <div class="logo">
            <img :src="logo.url">
        </div>
        <nav id="nav">
            <a :class="nav.classes" v-for="link in nav.links">{{ link.label }}</a>
            <button :class="login.classes">{{ login.label}}</button>
        </nav>
    </header>
</template>

<script>
    export default {
        data: () => {
            return {
                logo: {
                    url: '../assets/logo.png'
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
            }
        }
    }
</script>