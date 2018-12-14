  //Intro this project is personal to me because it's a memory game and I love memory games. I played video games as a child, but not currently, so the nostolga is real. 
  var audioR = document.getElementById("redAudio")
  var audioB = document.getElementById("blueAudio")
  var audioG = document.getElementById("greenAudio")
  var audioP = document.getElementById("purpleAudio")

// var bImages = document.getElementsByClassName('bImages')
// console.log({bImages})

let bImages = [
     "https://res.cloudinary.com/dh41vh9dx/image/upload/v1538350067/susan-sarandon.jpg",
     "https://res.cloudinary.com/dh41vh9dx/image/upload/v1538348194/maya-angula.jpg",
     "https://res.cloudinary.com/dh41vh9dx/image/upload/v1538344728/frida_K.jpg",
     "https://res.cloudinary.com/dh41vh9dx/image/upload/v1538347728/gloria_st.jpg" 
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
  const endAlert = document.querySelector('.alert')
  const gamePage = document.querySelector('#page2')
  const theseButtons = document.querySelector('.theseButtons')
  const instructionsPage = document.querySelector('#page1')
  const playButton = document.querySelector('#playbutton')
  const scorePage = document.querySelector('#page3')
  const restart = document.querySelector('#restart')

  restart.addEventListener('click', function () {
    instructionsPage.style.visibility = 'visible';
    gamePage.style.visibility = 'hidden';
    endAlert.style.display = 'none';
    score = 0
    userScore.innerHTML = score
    document.getElementById('nextLevel').disabled = false
    colorNum = 0
  })
  playButton.addEventListener('click', function () {
    console.log('I was clicked')
    instructionsPage.style.visibility = 'hidden'
    gamePage.style.visibility = 'visible'
    body.style.opacity = 10;
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
          console.log(user)
          winOrLoseAfter(colorNum, user)
        })
      }
    }
    clickColorButtons()
    let element = 0
    element = Math.floor(Math.random() * 4)
    colorNum.push(element)

    console.log(colorNum)

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
          // playRedAudio()
          setTimeout(function () {
            document.getElementById('red').classList.remove('activeR')
          }, 300)
          break;
        case 1:
          document.getElementById('blue').classList.add('activeB')
          // playBlueAudio()
          setTimeout(function () {
            document.getElementById('blue').classList.remove('activeB')
          }, 300)
          break;
        case 2:
          document.getElementById('green').classList.add('activeG')
          // playGreenAudio()
          setTimeout(function () {
            document.getElementById('green').classList.remove('activeG')
          }, 300)
          break;
        case 3:

          document.getElementById('purple').classList.add('activeP')
          // playPurpleAudio()
          setTimeout(function () {
            document.getElementById('purple').classList.remove('activeP')
          }, 300)
          break;
      }
    }



    function winOrLoseAfter(colorNum, user) {
      let loser = false
      if (user.length === colorNum.length) {
        console.log('time to check winner')
        for (let i = 0; i < colorNum.length; i++) {
          if (colorNum[i] !== user[i]) {
            console.log('incorrect')
            loser = true
            gamePage.style.visibility = "hidden"
            scorePage.style.visibility = 'visible'
            theseButtons.style.margintop = "28vh"
            endAlert.innerHTML = "Your Score is " + score
            userScore.innerHTML = score;

            //endAlert.style.display = 'none';
            endAlert.style.display = 'inline';
            document.getElementById('nextLevel').disabled = true
            document.getElementById('playGame').disabled = false
            break
          }
        }
        if (!loser) {
          console.log('you won!')
          score += colorNum.length * 10
          console.log("the score is", score)
          gamePage.style.visibility = "hidden"
          endAlert.innerHTML = "Your Score is " + score
          userScore.innerHTML = score;

          //endAlert.style.display = 'inline';
          // endAlert.style.color = 'green';
          susanBlink(colorNum)
        }
      }

    }


    // next Level, goes to page2 and adds 1 to sequence 
    document.getElementById('nextLevel').addEventListener('click', function () {
      console.log('next level')
   for(let i =0 ; i<bImages.length; i++){
       console.log(bImages)
  document.body.style.backgroundImage = "url(bImages[i])"
   }
      gamePage.style.visibility = "visible"
      endAlert.style.visibility = "hidden"
      console.log('next level has been reached')
      //   endAlert.style.visibility = "hidden"

      user = []
      //instructionsPage.stye.visibility = "hidden"


      // console.log("the score is", score,"the number of colors is", colorNum)
    })



    /* High Score Leader Board*/

    /* TO DO LIST*
    // 4. Alerts display "win next levelt"; 'fail display score"
    // 6. Build High Score Board
    8. Transitions for Win/lose Alerts
    // 10. high score board logic 
    11. Add background img of impressive women speaking, change img every level
    13. lock buttons
     */
  })


