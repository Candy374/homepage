/**
* Created by huangling on 14/05/2017.
*/
<template id="header">
    <header>
        <div class="logo">
            <img src="../../assets/logo.png"/>
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

<style lang="less">
    header {
        height: 40px;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 25px;
        right: 25px;
        top: 10px;
    }

    .logo {
        img {
            width: 200px;
            filter: drop-shadow(225px 0 #fff);
            border-right: 10px solid transparent;
            position: relative;
            left: -225px;
        }
    }

    nav {
        display: flex;

        .nav-item {
            color: #fff;
            padding: 5px 10px;
        }
    }
</style>