const txtUser = document.getElementById('user-2') 

txtUser.addEventListener('click', (e) => {
  const isBlue = txtUser.classList.contains('txt-blue')
  if(isBlue) {
    txtUser.classList.add('txt-red')
    txtUser.classList.remove('txt-blue')
  }else {
    txtUser.classList.remove('txt-red')
    txtUser.classList.add('txt-blue')
  }
})