const bg = ['orange', 'blue', 'red', 'black', 'yellow', 'green']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const bgBtn = document.getElementById('bgBtn')
const hexBtn = document.getElementById('hexBtn')
const color = document.querySelector('.color')

console.log(Math.floor(Math.random() * 6)) //숫자 랜덤하게 가져오는 객체

function getBgNum() {
  return Math.floor(Math.random() * bg.length)
}
function getHexNum() {
  return Math.floor(Math.random() * hex.length)
}

bgBtn.addEventListener('click', () => {
  const randomBgNum = getBgNum()
  document.body.style.backgroundColor = bg[randomBgNum]
  color.textContent = bg[randomBgNum]
})

hexBtn.addEventListener('click', () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getHexNum()]
  }
  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
})
