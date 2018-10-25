export default {
  updateCount (state, {num, num2}) { // 只能传两个参数
    console.log(num)
    state.count = num
  }
}
