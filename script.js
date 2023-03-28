let seconds = 0
let tens = 0
let mints = 0
const displayTens = document.getElementById('tens')
const displaySeconds = document.getElementById('seconds')
const displayMints = document.getElementById('mints')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval

//The clearInterval function in javascript is used to stop the event of the recurring calling of a function at a 
//fixed delay set by the setInterval() function. This function can be used only when a setInterval() function is 
//previously used.


//setInterval() The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function 
//or executes a code snippet, with a fixed time delay between each call. This method returns an interval ID which 
//uniquely identifies the interval, so you can remove it later by calling clearInterval() .

buttonStart.onclick = () => {
  clearInterval(interval)
  interval = setInterval(timer, 10) //here we are calling 'timer' for every 1ms
}

buttonStop.onclick = () => {
  clearInterval(interval)
}

buttonReset.onclick = () => {
  clearInterval(interval)
  tens = 0
  seconds = 0
  mints = 0
  displayTens.innerHTML = `0${tens}`
  displaySeconds.innerHTML = `0${seconds}`
  displayHours.innerHTML = `0${mints}`
}

const timer = () => {
  tens++

  if (Number(tens) <= 9) {
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(tens) > 9) {
    displayTens.innerHTML = tens
  }

  if (Number(tens) > 99) {
    console.log('seconds')
    seconds++
    displaySeconds.innerHTML = `0${seconds}`
    tens = 0
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(seconds) > 9) {
    displaySeconds.innerHTML = seconds
  }

  //mints
  if(Number(seconds) > 59) {
    console.log('mints')
    mints++
    displayMints.innerHTML = `0${mints}`
    seconds = 0
    displaySeconds.innerHTML = `0${seconds}`
  }

  if(Number(mints)>9){
    displayMints.innerHTML = `${mints}`
  }
}
