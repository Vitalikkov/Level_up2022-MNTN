document.addEventListener('DOMContentLoaded', function() {

  const navInit = () => {
    const nav = document.querySelector('.slider') // ищем блок навигации
    const links = document.querySelectorAll('.sld') // ищем все навигационные ссылки
    const sections = document.querySelectorAll('.slider_id') // ищем все секции
    sections.forEach(section => { // для каждой секции
      if (window.pageYOffset >= section.offsetTop) { // проверяем, если страница прокручена больше, чем расстояние секции от начала страницы
        links.forEach(link => { // для каждой ссылки
          link.classList.remove('sld_active') // удаляем активный класс
          if (link.dataset.section === section.dataset.section) { // проверяем, если data-атрибуты ссылки и секции совпадают
            link.classList.add('sld_active') // добавляем ссылке активный класс
          }

        })
      }

    })
  }
  navInit() // запускаем функцию при загрузке страницы
  window.addEventListener('scroll', () => {
    navInit() // запускаем функцию при скролле страницы
  })
  window.addEventListener('resize', () => {
    navInit() // запускаем функцию при ресайзе страницы
  })

})
