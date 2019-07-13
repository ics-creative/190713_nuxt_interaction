<template>
  <div>

    <div>
      <h1>Sample Portfolio</h1>

      <!-- 遷移リンクのボタン -->
      <div class="link link-1" v-bind:class="{ show: pageId === 'about'}">
        <nuxt-link class="open" to="/about">About</nuxt-link>
      </div>

      <div class="link link-2" v-bind:class="{ show: pageId === 'works'}">
        <nuxt-link class="open" to="/works">Works</nuxt-link>

      </div>

      <div class="link link-3" v-bind:class="{ show: pageId === 'contact'}">
        <nuxt-link class="open" to="/contact">Contact</nuxt-link>
      </div>

      <!-- 遷移先画面 -->
      <PageAbout />
      <PageWorks />
      <PageContact />
    </div>


    <nuxt />
  </div>
</template>
<script>
  import PageAbout from '../components/PageAbout'
  import PageWorks from '../components/PageWorks'
  import PageContact from '../components/PageContact'

  export default {
    name: 'Page',
    components: {
      PageAbout,
      PageWorks,
      PageContact
    },
    computed: {
      pageId() {
        return this.$store.getters['page/pageId']
      }
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* ウェブフォントを指定 */
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    /* 背景表示 */
    background-image: url("../assets/images/bg.jpg");
    background-size: cover;
    background-position: center;
  }

</style>
<style scoped lang="scss">


  /* タイトル表示 */
  h1 {
    font-size: calc(100vw / 10);
    text-align: center;
    margin: 0;
    padding: 40px 0 0 0;
    color: white;
  }

  .link {
    width: 20vw;
    height: 100px;
    line-height: 100px;

    position: absolute;
    top: 0;
    left: 0;

    color: white;
    font-size: 2rem;

    /* トランジションの時間 */
    transition: all 0.5s;

    .open {
      color: white;
      width: 100%;
      height: 100%;

      /* モーション用の指定 */
      transition: all 0.1s;

      display: inline-block;
      text-decoration: none;
      text-align: center;
    }

    /*  各ボタンの位置と色 */
    &.link-1 {
      transform: translate(10vw, calc(100vh - 200px));
      background: #ad1457;
    }

    &.link-2 {
      transform: translate(40vw, calc(100vh - 200px));
      background: #6a1b9a;
    }

    &.link-3 {
      transform: translate(70vw, calc(100vh - 200px));
      background: #283593;
    }

    &.show {
      // 画面全体に広げる
      width: 100vw;
      height: 100vh;
      // 左上に移動
      transform: translate(0, 0);
      z-index: 10;

      a.open {
        // ボタンは非表示にする
        opacity: 0;
      }
    }
  }


  .loading {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(20vw, 80vh);

    width: 150px;
    height: 150px;

    $sec: 1.0s;
    /* トランジションの時間 */
    transition: all $sec;

    svg {
      transition: all $sec;
    }

    .title {
      transition: all $sec / 4;
    }

    &.show {
      // 画面全体に広げる
      width: 100vw;
      height: 100vh;
      // 左上に移動
      transform: translate(0vw, 0vw);
      z-index: 10;

      svg {
        transform: scale(3, 3);
      }

      .title {
        opacity: 0;
      }
    }

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      text-align: center;
      line-height: 2rem;

      a {
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        color: white;
        animation: text-fade 300ms infinite linear;
      }
    }

    .circle1,
    .circle2,
    .circle3 {
      opacity: 0.7;
      transform-origin: 50% 47%;
      animation: rotation 3s infinite linear;
    }

    .circle2 {
      opacity: 0.2;
      background: #ff0;
      animation: rotation 5s infinite linear;
    }

    .circle3 {
      animation: rotation 2.5s infinite linear;
    }

    /* 回転アニメーション */
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    /* ピンク色の背景のアニメーション */
    @keyframes color-fade {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
    /* 点滅のアニメーション */
    @keyframes text-fade {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0.8;
      }
      50% {
        opacity: 0.9;
      }
      75% {
        opacity: 0.6;
      }
    }
  }
</style>
