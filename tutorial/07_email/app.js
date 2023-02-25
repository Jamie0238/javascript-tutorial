// emailjs.send("service_8o380j8","template_uxqacw9");

const form = document.querySelector('#contact-form')
const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close_Btn')
const inputs = document.querySelectorAll('input')
const userName = document.querySelectorAll('#userName')
const email = document.querySelectorAll('#email')
const message = document.querySelector('#message')

function sendEmail() {
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    if (userName.value == '' || email.value == '' || message.value == '') {
      alert('이름, 이메일, 내용을 확인하세요')
      return
    }

    this.contact_number.value = (Math.random() * 100000) | 0
    dimm.classList.add('active')

    emailjs.sendForm('service_8o380j8', 'template_uxqacw9', this).then(
      function () {
        modal.classList.add('active')
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    dimm.classList.remove('active')

    inputs.forEach((item) => (item.value = ''))
    message.value = ''
  })
}

sendEmail()
