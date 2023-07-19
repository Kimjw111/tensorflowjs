// TensorFlow.js 라이브러리 가져오기
const tf = require("@tensorflow/tfjs");

// 원시데이터
const trainData = {
  sizeMB: [
    0.08, 9.0, 0.001, 0.1, 8.0, 5.0, 0.1, 6.0, 0.05, 0.5, 0.002, 2.0, 0.005,
    10.0, 0.01, 7.0, 6.0, 5.0, 1.0, 1.0,
  ],
  timeSec: [
    0.135, 0.739, 0.067, 0.126, 0.646, 0.435, 0.069, 0.497, 0.068, 0.116, 0.07,
    0.289, 0.076, 0.744, 0.083, 0.56, 0.48, 0.399, 0.153, 0.149,
  ],
};
const testData = {
  sizeMB: [
    5.0, 0.2, 0.001, 9.0, 0.002, 0.02, 0.008, 4.0, 0.001, 1.0, 0.005, 0.08, 0.8,
    0.2, 0.05, 7.0, 0.005, 0.002, 8.0, 0.008,
  ],
  timeSec: [
    0.425, 0.098, 0.052, 0.686, 0.066, 0.078, 0.07, 0.375, 0.058, 0.136, 0.052,
    0.063, 0.183, 0.087, 0.066, 0.558, 0.066, 0.068, 0.61, 0.057,
  ],
};
// 데이터를 텐서로 변환
const shapeV = [20, 1];
const trainTensors = {
  sizeMB: tf.tensor2d(trainData.sizeMB, shapeV),
  timeSec: tf.tensor2d(trainData.timeSec, shapeV),
};
const testTensors = {
  sizeMB: tf.tensor2d(testData.sizeMB, shapeV),
  timeSec: tf.tensor2d(testData.timeSec, shapeV),
};
// 모델생성
const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [1], units: 1 }));
model.compile({ optimizer: "sgd", loss: "meanAbsoluteError" }); //경사하강법, 절대오차
// 모델훈련
model.fit(trainTensors.sizeMB, trainTensors.timeSec);
model.evaluate(testTensors.sizeMB, testTensors.timeSec).print();
model.predict(tf.tensor2d([[1], [3], [5]])).print(1);