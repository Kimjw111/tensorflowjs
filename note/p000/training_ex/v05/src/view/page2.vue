<template>
  <div>MobileNet을 이용한 이미지 분석</div>
  <hr />
  <div id="display">
    <div id="img-box" @dragover.prevent @drop="handleDrop">
      <input
        ref="image"
        type="file"
        name="img"
        id="input"
        accept="image/*"
        multiple="multiple"
        style="display: none"
        @change="upIMG"
      />
      <label for="input">+</label>
      <div v-if="!imgBase64">이미지를 드래그 앤 드롭하세요.</div>
      <div>
        <img
          ref="img"
          :src="imgBase64"
          alt="이미지 준비중..."
          v-if="imgBase64"
        />
      </div>
    </div>
    <hr />
    <div id="text">{{ text }}</div>
    <button v-if="imgBase64" @click="predict">분석</button>
    <div id="result">{{ result }}</div>
  </div>
</template>

<script>
import * as mobilenet from '@tensorflow-models/mobilenet'
export default {
  name: 'App',
  data() {
    return {
      imgBase64: '',
      result: '',
      text: '파일을 업로드하여 이미지분석을 시작하시오.'
    }
  },
  methods: {
    upIMG: function () {
      const image = this.$refs.image.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.text = e.target.result
        this.imgBase64 = e.target.result
      }
    },
    predict: function () {
      const img = this.$refs.img
      mobilenet.load().then((model) => {
        model.classify(img).then((result) => {
          this.result = `${result[0].className}입니다.`
        })
      })
    },
    handleDrop(event) {
      event.preventDefault()
      const image = event.dataTransfer.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.text = e.target.result
        this.imgBase64 = e.target.result
      }
    }
  }
}
</script>

<style scoped>
#img-box {
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid #8388e1;
  border-radius: 5px;
  color: #fff;
  background-color: lightblue;
  font-size: 3em;
  line-height: 200px;
  text-align: center;
}
img {
  width: 200px;
  height: auto;
  border-radius: 5px;
  margin: 10px;
}
</style>
