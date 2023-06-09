import { defineStore } from 'pinia'

export const useQuizListStore = defineStore('quizList', {
  state: () => ({
    quizes: [
      {
        id: 1,
        img: 'https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2012/11/AdobeStock_60467600_cup.jpg',
        name: 'Математика',
        questions: [
          {
            id: 1,
            text: '8 ÷ 2(2 + 2)',
            options: [
              {
                id: 1,
                label: 'A',
                text: '16',
                isCorrect: false
              },
              {
                id: 2,
                label: 'B',
                text: '1',
                isCorrect: true
              },
              {
                id: 3,
                label: 'C',
                text: '8',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: '24',
                isCorrect: false
              }
            ]
          },
          {
            id: 2,
            text: '√64 * 9',
            options: [
              {
                id: 1,
                label: 'A',
                text: '4',
                isCorrect: false
              },
              {
                id: 2,
                label: 'B',
                text: '81',
                isCorrect: false
              },
              {
                id: 3,
                label: 'C',
                text: '72',
                isCorrect: true
              },
              {
                id: 4,
                label: 'D',
                text: '144',
                isCorrect: false
              }
            ]
          },
          {
            id: 3,
            text: '3 + 3 x 3 ÷ 3 - 3',
            options: [
              {
                id: 1,
                label: 'A',
                text: '3',
                isCorrect: true
              },
              {
                id: 2,
                label: 'B',
                text: '1',
                isCorrect: false
              },
              {
                id: 3,
                label: 'C',
                text: '9',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: '16',
                isCorrect: false
              }
            ]
          }
        ]
      },
      {
        id: 2,
        img: 'https://blogs.biomedcentral.com/on-biology/wp-content/uploads/sites/5/2017/12/DNA.png',
        name: 'Биология',
        questions: [
          {
            id: 1,
            text: 'Цикл Кребса происходит в',
            options: [
              {
                id: 1,
                label: 'A',
                text: 'митохондриях',
                isCorrect: true
              },
              {
                id: 2,
                label: 'B',
                text: 'ядре',
                isCorrect: false
              },
              {
                id: 3,
                label: 'C',
                text: 'аппарате Гольджи',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: 'цитоплазме',
                isCorrect: false
              }
            ]
          },
          {
            id: 2,
            text: 'Сколько молекул кислорода удерживает гемоглобин?',
            options: [
              {
                id: 1,
                label: 'A',
                text: '1',
                isCorrect: false
              },
              {
                id: 2,
                label: 'B',
                text: '2',
                isCorrect: false
              },
              {
                id: 3,
                label: 'C',
                text: '3',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: '4',
                isCorrect: true
              }
            ]
          },
          {
            id: 3,
            text: 'Колбочки воспринимают ___ , а палочки — ___',
            options: [
              {
                id: 1,
                label: 'A',
                text: 'яркость; цвет',
                isCorrect: false
              },
              {
                id: 2,
                label: 'B',
                text: 'цвет; яркость',
                isCorrect: true
              },
              {
                id: 3,
                label: 'C',
                text: '3D объекты; 2D объекты',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: '2D объекты; 3D объекты',
                isCorrect: false
              }
            ]
          }
        ]
      },
      {
        id: 3,
        img: 'http://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/',
        name: 'Химия',
        questions: [
          {
            id: 1,
            text: 'Формула повареной соли?',
            options: [
              {
                id: 1,
                label: 'A',
                text: 'NaCl',
                isCorrect: true
              },
              {
                id: 2,
                label: 'B',
                text: 'K2',
                isCorrect: false
              },
              {
                id: 3,
                label: 'C',
                text: 'NaCl2C4H7',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: 'CH4',
                isCorrect: false
              }
            ]
          },
          {
            id: 2,
            text: "Каким символом обозначается калий?",
            options: [
              {
                id: 1,
                label: 'A',
                text: 'P',
                isCorrect: false
              },
              {
                id: 2,
                label: 'B',
                text: 'Pt',
                isCorrect: false
              },
              {
                id: 3,
                label: 'C',
                text: 'Pts',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: 'K',
                isCorrect: true
              }
            ]
          },
          {
            id: 3,
            text: 'Какое из этих соединений не органическое?',
            options: [
              {
                id: 1,
                label: 'A',
                text: 'CH4',
                isCorrect: false
              },
              {
                id: 2,
                label: 'B',
                text: 'NaCl',
                isCorrect: true
              },
              {
                id: 3,
                label: 'C',
                text: 'C2H6',
                isCorrect: false
              },
              {
                id: 4,
                label: 'D',
                text: 'C3H8',
                isCorrect: false
              }
            ]
          }
        ]
      }
    ]
  }),
  actions: {},
  getters: {
  }
})