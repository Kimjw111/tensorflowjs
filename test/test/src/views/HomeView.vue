<template>
  <div>
    <h1>MobileNet Example</h1>
    <hr />
    <input type="file" @change="handleFileUpload" />
    <p>{{ result }}</p>
  </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

export default {
  data() {
    return {
      result: ''
    }
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        // TensorFlow.js 모델 로드
        const model = await mobilenet.load()

        // 이미지 파일을 텐서로 변환
        const image = await this.loadImage(file)

        // 이미지 분류 예측
        const predictions = await model.classify(image)
        const className = predictions[0].className
        const probability = predictions[0].probability * 100
        if (probability >= 80) {
          this.result = `${className} ${probability.toFixed(2)}%`
        } else {
          this.result = `${className} ${probability.toFixed(2)}%`
        }

        // 텐서 메모리 해제
        image.dispose()
      } else {
        this.result = '파일을 선택해주세요.'
      }
    },
    async loadImage(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          const image = new Image()
          image.src = event.target.result
          image.onload = () => {
            const tensor = tf.browser.fromPixels(image)
            resolve(tensor)
          }
          image.onerror = (error) => {
            reject(error)
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }
}
</script>
