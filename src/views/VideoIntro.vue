<template>
  <div class="video-container">
    <video ref="introVideo" autoplay muted loop>
      <source src="@/assets/寶島宣傳影片.mp4" type="video/mp4" />
      您的瀏覽器不支援 HTML5 影片標籤。
    </video>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'VideoIntro',
  setup() {
    const router = useRouter()

    const handleScroll = (event) => {
      if (window.scrollY > 0) {
        router.push('/maincontent')
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      handleScroll
    }
  }
}
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100vh; /* 影片占滿整個視窗高度 */
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 確保影片覆蓋整個容器 */
}
</style>
