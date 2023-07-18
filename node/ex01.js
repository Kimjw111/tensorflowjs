// TensorFlow.js 라이브러리 가져오기
const tf = require("@tensorflow/tfjs");

/* p044 문제 [sequential api를 활용] */
// sequential api를 활용하여 and 회로의 진리표를 이해하고
// 순차적 api모델에 레이어와 활성 함수를 이용하여 만들어진 모델을 3000회 fit하고
// 1과 0일때의 결과를 예측하고 출력하라

/* 문제 세분화 */
// 1. sequential api를 활용하여
const model = tf.sequential();
// 3. 순차적 api모델에 레이어와 활성 함수를 이용하여 만들기
model.add(tf.layers.dense({ units: 8, inputShape: 2, activation: "tanh" }));
model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));
model.compile({ loss: "binaryCrossentropy", optimizer: "adam" });
// 2. and 회로의 진리표를 이해
const xs = tf.tensor2d(
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  [4, 2]
);
const ys = tf.tensor2d([0, 0, 0, 1], [4, 1]);
const fitParm = {
  batchSize: 32,
  // 4. 만들어진 모델을 3000회 fit하고
  epochs: 3000,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log("epoch", epoch, logs, "RMSE=>", Math.sqrt(logs.loss));
    },
  },
};
model.fit(xs, ys, fitParm).then(() => {
  // 5. 1과 0일때의 결과를 예측하고 출력하라
  model.predict(tf.tensor2d([[1, 0]], [1, 2])).print();
});
