<template>
  <div class="container">
    <div v-for="(item, idx) in lists" :key="item.id">
      <div class="col" @drop.prevent="onDrop($event, idx)" @dragover.prevent>
        <div
          class="box"
          v-for="(numItem, idx) in item.numberList"
          :key="idx"
          draggable="true"
          @dragstart="startDrag($event, numItem)"
        >
          <p>{{ numItem.content }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="disp">
    <hr />
    <div v-if="sucess" class="good">성공!!</div>
    <div v-if="!sucess">data: {{ lists }}</div>
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { id: 1, numberList: [{ content: 4 }, { content: 7 }] },
        {
          id: 2,
          numberList: [
            { content: 2 },
            { content: 5 },
            { content: 8 },
            { content: 6 },
            { content: 1 }
          ]
        },
        { id: 3, numberList: [{ content: 3 }, { content: 9 }] }
      ],
      done: [
        { id: 1, numberList: [{ content: 1 }, { content: 4 }, { content: 7 }] },
        { id: 2, numberList: [{ content: 2 }, { content: 5 }, { content: 8 }] },
        { id: 3, numberList: [{ content: 3 }, { content: 6 }, { content: 9 }] }
      ],
      sucess: ''
    }
  },
  methods: {
    startDrag(event, item) {
      event.dataTransfer.setData('some', item.content)
    },
    onDrop(event, colNum) {
      const selectedItem = event.dataTransfer.getData('some') * 1
      // 리스트에서 선택된 아이템과 같은 content 값을 가진 요소를 찾아 index를 반환
      let targetIdx, targetItem
      this.lists.forEach((obj, index) => {
        obj.numberList.forEach((ob) => {
          if (ob.content === selectedItem) {
            targetIdx = index
            targetItem = ob
          }
        })
      })
      // drop이 된 <div> index를 받아 리스트에 추가
      this.lists[colNum].numberList.push(targetItem)
      this.lists[targetIdx].numberList.splice(
        this.lists[targetIdx].numberList.indexOf(targetItem),
        1
      )
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  width: 512px;
  margin: 32px auto;
  justify-content: center;
}
.col {
  display: flex;
  height: 500px;
  width: 150px;
  background-color: #fff;
  border: 4px solid lightgray;
  margin-left: 5px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
}
.box {
  width: 130px;
  height: 50px;
  color: #fff;
  background-color: lightskyblue;
  margin-top: 10px;
  border-radius: 10px;
}
.good {
  background-color: yellow;
}
</style>
