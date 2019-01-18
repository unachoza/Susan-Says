  //Intro this project is personal to me because it's a memory game with a healthy dose of feminism.
let bImages = [
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220914/susan-sarandon.jpg",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220905/maya-angula.jpg",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1538344728/frida_K.jpg",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546223655/BettyFriedan.jpg",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1538347728/gloria_st.jpg",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220902/AlexiandraOC.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220913/RBG.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546223656/simon_de_beauvoir.jpg",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220916/SerenaW.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220903/Indra.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220903/anita_hill.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220900/DrFord.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220905/Merkle.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220905/Madonna.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220901/JuleyD.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220907/Malala.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220906/Michelle_o.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220909/SandraO.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546223657/agnes_varda.jpg",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220915/Sheryl_Sanberg.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220900/Hillary_Clinton.png",
    "https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220913/oprah.png"
 ]

  let colorNum = [0]
  let score = 0
  //Dom Creation and saved variables
  const colorButtons = document.querySelectorAll('.color')
  const blue = document.querySelector('#blue')
  const red = document.querySelector('#red')
  const goB = document.querySelector('#go')
  const green = document.querySelector('#green')
  const purple = document.querySelector('#purple')

  const userScore = document.querySelector('#display-score')
  const gamePage = document.querySelector('#page2')
  const theseButtons = document.querySelector('.theseButtons')
  const instructionsPage = document.querySelector('#page1')
  const playButton = document.querySelector('#playbutton')
  const userInput = document.querySelector('#user-name')
  const scorePage = document.querySelector('#page3')
  const restart = document.querySelector('#restart')
  const nextLevel = document.getElementById('nextLevel')
  const header =  document.querySelector('h1')

  

  playButton.addEventListener('click', function () {
    console.log('playButton was clicked')
    instructionsPage.style.visibility = 'hidden'
    gamePage.style.visibility = 'visible'
    playButton.style.visibility = "hidden"
    userInput.style.visibility = 'hidden'
    nextLevel.style.visibility = "hidden"
    header.style.visibility = "hidden"

  })

  //making buttons objects
  const buttons = [{
    dom: blue,
    value: 1
  }, {
    dom: green,
    value: 2
  }, {
    dom: purple,
    value: 3
  }, {
    dom: red,
    value: 0
  }, {
    dom: go,
    value: 'go'
  }]

  goB.addEventListener("click", function () {
    let user = []
    // //**Button event listeners 
    // //Color Buttons to get User's Sequence 
    function clickColorButtons() {
      for (let i = 0; i < buttons.length - 1; i++) {
        buttons[i]['dom'].addEventListener('click', function () {
          user.push(buttons[i]["value"])
          winOrLoseAfter(colorNum, user)
        })
      }
    }
    clickColorButtons()
    let element = 0
    element = Math.floor(Math.random() * 4)
    colorNum.push(element)

    console.log("Susan array" , colorNum)

    function susanBlink(colorNum) {
      for (let i = 0; i < colorNum.length; i++) {
        setTimeout(function () {
          whichColorBlinks(colorNum[i]);
        }, i * 500);
      }
    }
    susanBlink(colorNum)

    function whichColorBlinks(colorNum) {
      switch (colorNum) {
        case 0:
          document.getElementById('red').classList.add('activeR')
          setTimeout(function () {
            document.getElementById('red').classList.remove('activeR')
          }, 400)
          break;
        case 1:
          document.getElementById('blue').classList.add('activeB')
          setTimeout(function () {
            document.getElementById('blue').classList.remove('activeB')
          }, 400)
          break;
        case 2:
          document.getElementById('green').classList.add('activeG')
          setTimeout(function () {
            document.getElementById('green').classList.remove('activeG')
          }, 400)
          break;
        case 3:
          document.getElementById('purple').classList.add('activeP')
          setTimeout(function () {
            document.getElementById('purple').classList.remove('activeP')
          }, 400)
          break;
      }
    }

    function winOrLoseAfter(colorNum, user) {
      let loser = false
      if (user.length === colorNum.length) {
        console.log("user array", user)
        console.log('time to check winner')
        for (let i = 0; i < colorNum.length; i++) {
          if (colorNum[i] !== user[i]) {
            console.log('incorrect')
            loser = true
            gamePage.style.visibility = "hidden"
            page3.style.visibility = 'visible'
            theseButtons.style.margintop = "28vh"
            userScore.innerHTML = "Susan Says " + userName + ", Your Score is " + score;
            scorePage.style.visibility = "visible"
            isStorage && localStorage.setItem('fap-scores', elements.scores)
            break
          }
        }
        if (!loser) {
          console.log('you won!')
          score += colorNum.length * 10
          console.log("the score is", score)
          gamePage.style.visibility = "hidden"
          susanBlink(colorNum)
          nextLevel.style.visibility = "visible"
        }
      }
    }
    document.getElementById('nextLevel').addEventListener('click', function () {
      gamePage.style.visibility = "visible"
      nextLevel.style.visibility = "hidden"
      console.log('next level has been reached')
      user = []
    })
 
  })

  var i = 0
  document.getElementById('nextLevel').addEventListener('click', () => {
    i += 1
    document.body.style.background = `url(${bImages[i]})`
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "no-reapeat" 
  }) 

  function reloading (){
    console.log('refresh!')
    location.reload();

}

/*   
High Score Leader Board
    Build High Score Board
    High score board logic 
     */ 

var userName = document.getElementById("user-name").value
console.log(userName)

    function handleSubmit(){
        console.log("submitted")
        console.log("the value is " + userName)
        var input_value = document.getElementById('question').value;
        var userName = document.getElementById("user-name").value
        console.log(input_value)
    document.getElementById('displayQuestion').innerHTML = input_value;


    }

const isStorage = 'undefinted' !== typeof localStorage;

if( isStorage && localStorage.getItem('fap-scores')){
  elements.scores = localStorage.getItem('fap-scores').split(',')
}