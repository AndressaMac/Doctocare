window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  ShowNavonScroll()
  showBackToTopButtonScroll()
  activateMenuCurrentSection(home)
  activateMenuCurrentSection(services)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)
}

function ShowNavonScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function activateMenuCurrentSection(section) {
  const targeLine = scrollY + innerHeight / 2
  console.log(targeLine)

  //verificar se a sação passou da linha //
  //quais dados cou precisar ?//
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targeLine >= sectionTop
  console.log(sectionTopReachOrPassedTargetLine)

  //verificar se a base está abaixo da linha alvo//

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targeLine
  console.log(sectionEndPassedTargetLine)

  //limites da sessão //

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  console.log(sectionBoundaries)

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  // const sectionId = section.getAttribute(`id`)
  // const menuElement = document.querySelector(`.menu [href*=${sectionId}]`)

  // menuElement.classList.remove('active')
  //if (sectionBoundaries) {
  //  menuElement.classList.add('active')

  //function ScrollReveal() {
  //var options = {
  // reveal: function() {}
  //}
  //return options= ScrollReveal()
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
