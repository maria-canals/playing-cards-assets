const numbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
const aces = ['C', 'D', 'S', 'H']
const acesNames = ['clubs', 'diamonds', 'spades', 'hearts']

const App = {
    data() {
      return {
        cards: []
      }
    },
    created() {  
        for (number in numbers) {
            for (ace in aces) {
              this.cards.push({
                value: numbers[number] + aces[ace],
                image: `/png/${numbers[number]}_of_${acesNames[ace]}.png`
              })
            }
          }
    }
}
  
  const app = Vue.createApp(App)
  
  app.component('poker-card', {
    props: ['image', 'value'],
    data() {
      return {
          isFlipped: true
      }
    },

    methods: {
      flipCard(){
          this.isFlipped = !this.isFlipped

      }
    },

    template: `
        <img :src="image" 
        v-if="!isFlipped"
        @click="flipCard" width="100">

        <img src="/png/back.png" 
        v-else="isFlipped"
        @click="flipCard" width="100">
       `
  })

  app.mount('#app')
  
