// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/index', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header: {
      name: {
        firstname: 'Dmytro',
        lastname: 'Ivanov',
      },
      position: 'Junior Fullstack JS Developer',
      salary: '600$ в місяць ',
      address: 'Ukrain,Kyiv',
    },

    main: {
      summary: {
        title: 'summary',
        text: 'Open-mided for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I lern the damain and try to understand tht idea of the project . Good team player , every colleague is a friend to me . ',
      },

      otherexperience: {
        title: 'other.experience',
        text: ' Pet project for prasing sport betting data from different platforms ( odds) and sport sttatistics (tournament position , goals , etc) , analyzing by simple mathematics models and preparing probablity for such events like : money lile / first win/dram/second win , totals ets.',
      },
    },

    footer: {
      social: {
        email: {
          text: 'dmytro@mail.com',
          href: 'mailto:dmytro@mail.com',
        },
        phone: {
          text: '+380670000123',
          href: 'tel:+380670000123',
        },
        linkedin: {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/dmytro-test',
        },
      },
    },
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header: {
      name: {
        firstname: 'Dmytro',
        lastname: 'Ivanov',
      },
      position: 'Junior Fullstack JS Developer',
      salary: '600$ в місяць ',
      address: 'Ukraine,Kyiv',
    },

    main: {
      skills: [
        'HTML ',
        'Handlebards',
        'VS Code',
        ' Git',
        'Terminal',
        'NPM',
      ],
    },

    footer: {
      social: {
        email: {
          text: 'dmytro@mail.com',
          href: 'mailto:dmytro@mail.com',
        },
        phone: {
          text: '+380670000123',
          href: 'tel:+380670000123',
        },
        linkedin: {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/dmytro-test',
        },
      },
    },
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header: {
      name: {
        firstname: 'Dmytro',
        lastname: 'Ivanov',
      },
      position: 'Junior Fullstack JS Developer',
      salary: '600$ в місяць ',
      address: 'Ukraine,Kyiv',
    },

    main: {
      education: ['Поділля', 'КМРФ', 'ДУІТ'],
    },

    footer: {
      social: {
        email: {
          text: 'dmytro@mail.com',
          href: 'mailto:dmytro@mail.com',
        },
        phone: {
          text: '+380670000123',
          href: 'tel:+380670000123',
        },
        linkedin: {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/dmytro-test',
        },
      },
    },
  })
})

// Підключаємо роутер до бек-енду

module.exports = router
