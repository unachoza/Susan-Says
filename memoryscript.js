  //Intro this project is personal to me because it's a memory game and I love memory games. I played video games as a child, but not currently, so the nostolga is real. 
  var audioR = document.getElementById("redAudio")
  var audioB = document.getElementById("blueAudio")
  var audioG = document.getElementById("greenAudio")
  var audioP = document.getElementById("purpleAudio")

let bImages = [
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/susan-sarandon.jpg",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/maya-angula.jpg",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/frida%20K.jpg",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/gloria_st.jpg",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/AlexiandraOC.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/RBG.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/SerenaW.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/Indra.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/anita_hill.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/Merkle.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/Madonna.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/JuleyD.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/Malala.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/Michelle_o.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/SandraO.png",
    "file:///Users/ariannaluchachoza/Desktop/ALL%20FOLDERS/Code/Baby%20Developer/Susan-Says/images/oprah.png"
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
    //document.getElementById('nextLevel').disabled = false
    colorNum = 0
  })

  playButton.addEventListener('click', function () {
    console.log('I was clicked')
    instructionsPage.style.visibility = 'hidden'
    gamePage.style.visibility = 'visible'
    //body.style.opacity = 10;
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
            //document.getElementById('playGame').disabled = false
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
    // images are being called, syntax is correct, having trouble looping 
    // next Level, goes to page2 and adds 1 to sequence 
    var i = 0 
    document.getElementById('nextLevel').addEventListener('click',  (e) => {
      e.stopPropagation()
      user = []
      i++
      console.log(i)
      //document.body.style.background = `url(${bImages[i]})`
      gamePage.style.visibility = "visible"
      endAlert.style.visibility = "hidden"
      console.log('next level has been reached')
    })
    /* High Score Leader Board
    Alerts display "win next levelt"; 'fail display score"
    Build High Score Board
    Transitions for Win/lose Alerts
    High score board logic 
    Add background img of impressive women speaking, change img every level
     */
  })
  var i = 0
  document.getElementById('nextLevel').addEventListener('click', () => {
    console.log("this next level button", i)
    i += 1
    document.body.style.background = `url(${bImages[i]})`
  })