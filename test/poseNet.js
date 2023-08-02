const video = document.getElementById('video')
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const button = document.querySelector('button')
const result_label = document.getElementById('result_label')
let epose
let model

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: false
  })
  .then(function (stream) {
    video.srcObject = stream
  })

posenet.load().then((loadedModel) => {
  model = loadedModel // 로드된 모델을 전역 변수에 할당
  console.log(model)
  video.onloadeddata = (e) => {
    console.log('정상')
    predict()
  }

  function predict() {
    model.estimateSinglePose(video).then((pose) => {
      epose = pose
      canvas.width = video.width
      canvas.height = video.height
      drawKeypoints(pose.keypoints, 0.6, context)
      drawSkeleton(pose.keypoints, 0.6, context)
    })
    requestAnimationFrame(predict)
  }
})

button.addEventListener('click', () => {
  console.log(epose.keypoints)
  const leftHandRaised =
    epose.keypoints[7].position.y > epose.keypoints[0].position.y &&
    epose.keypoints[7].position.y > epose.keypoints[1].position.y

  const rightHandRaised =
    epose.keypoints[8].position.y > epose.keypoints[0].position.y &&
    epose.keypoints[8].position.y > epose.keypoints[1].position.y

  if (leftHandRaised && !rightHandRaised) {
    console.log('왼손을 들었네요!!')
  } else if (!leftHandRaised && rightHandRaised) {
    console.log('오른손을 들었네요!!')
  } else if (leftHandRaised && rightHandRaised) {
    console.log('양손을 들었습니다!!')
  } else {
    console.log('손을 들지 않았습니다.')
  }
  tf.dispose()
})
const color = 'blue'
const boundingBoxColor = 'red'
const lineWidth = 2
function toTuple({ y, x }) {
  return [y, x]
}

function drawPoint(ctx, y, x, r, color) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
}

function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
  ctx.beginPath()
  ctx.moveTo(ax * scale, ay * scale)
  ctx.lineTo(bx * scale, by * scale)
  ctx.lineWidth = lineWidth
  ctx.strokeStyle = color
  ctx.stroke()
}

function drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {
  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
    keypoints,
    minConfidence
  )
  adjacentKeyPoints.forEach((keypoints) => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      color,
      scale,
      ctx
    )
  })
}

function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i]
    if (keypoint.score < minConfidence) {
      continue
    }
    const { y, x } = keypoint.position
    drawPoint(ctx, y * scale, x * scale, 3, color)
  }
}
