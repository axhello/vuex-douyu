<template>
     <swiper class="my-swipe" :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="billboard in billboards">
              <img class="live-img" :src="billboard.imageUrl">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
  export default {
    data: () => ({
      billboards: [
        {
          imageUrl: 'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0828/201708281533217578.jpg'
        },
        {
          imageUrl: 'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0907/201709071732053454.png'
        },
        {
          imageUrl: 'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0915/201709151037285098.jpg'
        },
        {
          imageUrl: 'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0918/201709181538588580.jpg'
        },
        {
          imageUrl: 'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0810/201708101123152416.jpg'
        },
        {
          imageUrl: 'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0908/201709082136105853.jpg'
        }],
      swiperOption: {
        autoplay: 3000,
        loop: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    })
  }
</script>