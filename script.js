
const images = document.querySelectorAll('.my-img')
const imgCon = document.querySelector('.image--container')
const innerCon = document.querySelector('.inner-container')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const dots = document.querySelector('.dots')

const btns = [leftBtn, rightBtn]


let maxPos =  Math.floor(images.length / 2 ) * 450
let dotIndex = 3
let currentPos = 0

images.forEach(() => {
    let dot = document.createElement('div')
    dot.classList.add('dot')
    dots.appendChild(dot)
})

const dotsList = document.querySelectorAll('.dot')
let currentDot = dotsList[dotIndex]
currentDot.classList.add('dot-active')

function changeDot(i) {
    currentDot.classList.remove('dot-active')
    currentDot = dotsList[i]
    currentDot.classList.add('dot-active')
}

dotsList.forEach((element, i) => {
    element.addEventListener('click', () => {
        innerCon.style.transform = `translateX(${maxPos - (450 * i)}px)`
        dotIndex = i
        changeDot(dotIndex)
    })
})

btns.forEach((element) => element.addEventListener('click', (e) => {
    if (currentPos > -maxPos && currentPos < maxPos) {
        e.target.closest('button').value === 'left' ? 
        (innerCon.style.transform =  `translateX(${currentPos + 450}px)`, currentPos = currentPos + 450, dotIndex -= 1, changeDot(dotIndex)): 
        (innerCon.style.transform = `translateX(${currentPos - 450}px)`, currentPos -= 450, dotIndex += 1, changeDot(dotIndex))
    } else if (currentPos === maxPos) {
        e.target.closest('button').value === 'left' ?
         (innerCon.style.transform = `translateX(-${maxPos}px)`, currentPos = -maxPos, dotIndex = dotsList.length - 1, changeDot(dotIndex)) : (innerCon.style.transform = `translateX(${currentPos - 450}px)`, currentPos -= 450, dotIndex += 1, changeDot(dotIndex))
    } else if (currentPos === -maxPos) {
        e.target.closest('button').value === 'left' ?
        (innerCon.style.transform = `translateX(${currentPos + 450}px)`,
         currentPos = currentPos + 450, dotIndex -= 1, changeDot(dotIndex)) : (innerCon.style.transform = `translateX(${maxPos}px)`, currentPos = maxPos, dotIndex = 0, changeDot(dotIndex))}
}))

function autoScroll() {
    if (currentPos > -maxPos) {
        innerCon.style.transform = `translateX(${currentPos - 450}px)`
        currentPos -= 450
        dotIndex += 1
        changeDot(dotIndex)
    } else if (currentPos === -maxPos) {
        innerCon.style.transform = `translateX(${maxPos}px)`
        currentPos = maxPos
        dotIndex = 0
        changeDot(dotIndex)
    }
}


setInterval(autoScroll, 5000)