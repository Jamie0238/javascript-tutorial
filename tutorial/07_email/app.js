// emailjs.send("service_8o380j8","template_uxqacw9");

const form = document.querySelector('#contact-form')

function senEmail() {
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0
    // these IDs from the previous steps
    emailjs.sendForm('service_8o380j8', 'template_uxqacw9', this).then(
      function () {
        console.log('SUCCESS!')
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  })
}

senEmail()
