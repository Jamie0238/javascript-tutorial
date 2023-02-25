// Application ID 3dccc8d0
// Application Keys 61989a3ef004c93213a391098db17c36

const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '3dccc8d0'
const APP_KEY = '61989a3ef004c93213a391098db17c36'

function paintRecipe(items) {
  let foods = ''
  items.map((item) => {
    console.log(item)

    foods += `<div class="food">
    <div class="food_img">
      <img src="${item.recipe.image}" alt="" />
    </div>
    <div class="food_info">
      <div class="food_title">
        <h3>${item.recipe.label}</h3>
        <a href="${item.recipe.url}" target="_blank">View Recipe</a>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        nihil reprehenderit laboriosam eligendi ab molestiae tempora
        quidem quasi exercitationem, id, esse commodi sunt, quas fugiat
        minima error fuga quia aut.
      </p>
    </div>
  </div>`
  })

  foodList.innerHTML = foods
}

function getRecipe(query) {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

  fetch(url)
    .then((response) => response.json())
    .then((data) => paintRecipe(data.hits))
}
// 함수는 블록 단위로 실행돼서 다른 블록에서는 이름이 같아도 됨

function init() {
  form.addEventListener('submit', function (e) {
    e.preventDefault() //refresh 방지
    const query = input.value
    getRecipe(query)
  })
}

init()
