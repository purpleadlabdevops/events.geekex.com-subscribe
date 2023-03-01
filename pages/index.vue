<template>
  <main>
    <Loader v-if="loader" />
    <Bgimage />
    <section class="subscribe">
      <div class="container">
        <img class="image__material" src="@/assets/img/bg-material.png">
        <img class="image__bird" src="@/assets/img/bg-bird.png">
        <Logo class="subscribe__logo" />
        <h1>THE ONLINE HOME TO NETWORK AND LEARN WITH HIGH-LEVEL MARKETERS</h1>
<!--         <div class="subscribe__video">
          <img src="@/assets/img/video-frame.png">
        </div> -->
        <h2>Get every training, course, and event recording we have ever done when you join GeekHub!</h2>
        <ul>
          <li>Every Value-Packed Training & Course We Have Ever Released</li>
          <li>Access to ALL live streams for every GeekOut Event in 2023</li>
          <li>All The Recordings From Every Event We Have Ever Done</li>
        </ul>
        <div class="btn__group">
        <Button
          value="No, I Don't Want "
          class="btn__dark"
          arrow="right"
          @click.prevent="window.location.href = 'https://geekex.com/';"
        />
        <Button
          value="Yes, Subscribe"
          class="btn__default"
          arrow="right"
          @click.prevent="$store.dispatch('global/addSubscriber')"
        />
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          ssr: false,
          defer: true,
          hid: 'everflow',
          src: 'https://www.bls29trk.com/scripts/sdk/everflow.js',
          callback: () => {
            EF.conversion({
              offer_id: 166,
              event_id: 314,
              affiliate_id: EF.urlParameter('affid'),
              sub1: EF.urlParameter('sub1'),
              sub2: EF.urlParameter('sub2'),
              sub3: EF.urlParameter('sub3'),
              sub4: EF.urlParameter('sub4'),
              sub5: EF.urlParameter('sub5'),
              uid: EF.urlParameter('uid'),
              source_id: EF.urlParameter('source_id'),
              transaction_id: EF.urlParameter('_ef_transaction_id')
            })
              .then(res => {
                console.log('EF.conversion PageView');
                console.dir(res)
              })
          }
        }
      ]
    }
  },
  computed: {
    thankyou(){ return this.$store.getters['payment/getThankyou'] },
    loader(){ return this.$store.getters['global/getLoader'] },
  },
  beforeCreate(){
    if(!localStorage.billing){
      window.location.href = "https://geekex.com/";
    }
  },
  mounted(){
    console.log( this.$route.query.id )
  }
}
</script>
<style lang="scss" scoped>
.subscribe{
  position: relative;
  z-index: 2;
  padding-top: clamp(15px, cqi(40), 40px);
  padding-bottom: clamp(100px, cqi(200), 200px);
  .container{
    position: relative;
  }
  h1{
    font-weight: 400;
    font-size: clamp(30px, cqi(60), 60px);
    line-height: 97.3%;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: clamp(35px, cqi(65), 65px);
  }
  h2{
    font-weight: 400;
    font-size: clamp(18px, cqi(24), 24px);
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.03em;
    margin-bottom: clamp(35px, cqi(65), 65px);
  }
  ul{
    display: flex;
    justify-content: space-between;
    margin-bottom: clamp(35px, cqi(65), 65px);
  }
  li{
    font-weight: 400;
    font-size: clamp(14px, cqi(18), 18px);
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.03em;
    &:not(:first-child){
      margin-left: clamp(15px, cqi(50), 50px);
    }
  }
  .btn__group{
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  &__video{
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: clamp(35px, cqi(65), 65px);
    img{
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__logo{
    width: clamp(55px, cqi(150), 150px);
    margin-bottom: clamp(55px, cqi(95), 95px);
  }
}
.image{
  &__material{
    position: absolute;
    top: 0;
    left: 100%;
    width: clamp(137px, cqi(195), 195px);
    z-index: -1;
    @media(max-width:1300px){
      transform: translateX(-80%) rotate(-15deg);
    }
  }
  &__bird{
    position: absolute;
    bottom: 0;
    right: 100%;
    width: clamp(91px, cqi(256), 256px);
    z-index: -1;
    @media(max-width:1400px){
      transform: translateX(90%);
    }
    @media(max-width:576px){
      transform: translateY(100%) translateX(100%);
    }
  }
}
</style>