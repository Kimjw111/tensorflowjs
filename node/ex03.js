// TensorFlow.js 라이브러리 가져오기
const tf = require("@tensorflow/tfjs");
// 원시 데이터
const temp = [24, 26, 28, 30];
const sell = [130, 140, 150, 160];
const tftemp = tf.tensor1d(temp);
const tfsell = tf.tensor1d(sell);
// 모델을 만들기 함수적 API
const x = tf.input({ shape: [1] });
const y = tf.layers.dense({ units: 8, activation: "relu" }).apply(x); //은닉층
const z = tf.layers.dense({ units: 1 }).apply(y); //은닉층
const model = tf.model({ inputs: x, outputs: z });
const param = {
  optimizer: tf.train.adam(),
  loss: tf.losses.meanSquaredError,
};
model.compile(param); //컴파일
// 훈련하기
const fitParam = {
  epochs: 2000,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log("epoch: ", epoch, logs, "RMSE=> ", Math.sqrt(logs.loss));
    },
  },
};
(async () => {
  await model.fit(tftemp, tfsell, fitParam);
  await model.predict(tftemp).print();
})();
