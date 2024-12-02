// Import styles
import './styles'

// Import js
import './src/tablet/tablet'
import './src/phone/phone'

// Slider
const htmlSliderElements = {
    btnReturn: document.querySelector("#btnReturn"),
    btnNext: document.querySelector("#btnNext"),
    img: document.querySelector("#img")
}

const arrayImgs = [
    '1.png',
    '2.png',
    '3.png',
]

let indexImg = 0

htmlSliderElements.btnReturn.addEventListener("click", () => {
    htmlSliderElements.img.classList.add('hidden')

    setTimeout(() => {
        if (indexImg != 0) {
            indexImg -= 1
        } else {
            indexImg = arrayImgs.length - 1
        }
        htmlSliderElements.img.src = `./src/img/works/${arrayImgs[indexImg]}`
        htmlSliderElements.img.classList.remove('hidden')
    }, 500)
})

htmlSliderElements.btnNext.addEventListener("click", () => {
    htmlSliderElements.img.classList.add('hidden')

    setTimeout(() => {
        if (indexImg != arrayImgs.length - 1) {
            indexImg += 1
        } else {
            indexImg = 0
        }
        htmlSliderElements.img.src = `./src/img/works/${arrayImgs[indexImg]}`
        htmlSliderElements.img.classList.remove('hidden')
    }, 500)
})

// Experts
const htmlExpertsElements = {
    imgExpert1: document.querySelector("#imgExpert1"),
    titleTextExpert1: document.querySelector("#titleTextExpert1"),
    infoTextExpert1: document.querySelector("#infoTextExpert1"),
    imgExpert2: document.querySelector("#imgExpert2"),
    titleTextExpert2: document.querySelector("#titleTextExpert2"),
    infoTextExpert2: document.querySelector("#infoTextExpert2"),
}

const arrayImgsTabletExperts1 = [
    '1.png',
    '3.png',
    '5.png',
    '7.png',
]

const arrayImgsTabletExperts2 = [
    '2.png',
    '4.png',
    '6.png',
    '8.png',
]

let imgIndexBlock1 = 0
let imgIndexBlock2 = 0

const arrayTitleTextExperts1 = [
    "Твердохліб Андрій Валерійович",
    "Звягіна Майя Юріївна",
    "Бесчастний Олександр Олександрович",
    "Олексюк Аліна"
]

const arrayTitleTextExperts2 = [
    "Киселиця Владислав Юрійович",
    "Коваль Тетяна Валеріївна",
    "Попеско Анастасія Ігорівна",
    "Пашков Валентин Валерійович"
]

let textTitleIndex1 = 0
let textTitleIndex2 = 0

const arrayInfoTextExperts1 = [
    "Власник клінік, Терапевтичний прийом,Хірургічний прийом,Ортопедичний прийом.",
    "Професійний догляд та профілактика.",
    "Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом",
    "Адміністратор"
]

const arrayInfoTextExperts2 = [
    "Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом",
    "Асистент стоматолога",
    "Терапевтичний прийом, Дитячий прийом, Професійний догляд та профілактика",
    "Ортодонтичний прийом"
]

let textInfoIndex1 = 0
let textInfoIndex2 = 0

setInterval(() => {
    htmlExpertsElements.imgExpert1.classList.add('hidden')
    htmlExpertsElements.imgExpert2.classList.add('hidden')
    htmlExpertsElements.titleTextExpert1.classList.add('hidden')
    htmlExpertsElements.titleTextExpert2.classList.add('hidden')
    htmlExpertsElements.infoTextExpert1.classList.add('hidden')
    htmlExpertsElements.infoTextExpert2.classList.add('hidden')

    setTimeout(() => {
        if (
            imgIndexBlock1 != arrayImgsTabletExperts1.length - 1 &&
            imgIndexBlock2 != arrayImgsTabletExperts2.length - 1 &&
            textTitleIndex1 != arrayTitleTextExperts1.length - 1 &&
            textTitleIndex2 != arrayTitleTextExperts2.length - 1 &&
            textInfoIndex1 != arrayInfoTextExperts1.length - 1 &&
            textInfoIndex2 != arrayInfoTextExperts2.length - 1
        ) {
            imgIndexBlock1 += 1
            imgIndexBlock2 += 1

            textTitleIndex1 += 1
            textTitleIndex2 += 1

            textInfoIndex1 += 1
            textInfoIndex2 += 1
        } else {
            imgIndexBlock1 = 0
            imgIndexBlock2 = 0

            textTitleIndex1 = 0
            textTitleIndex2 = 0

            textInfoIndex1 = 0
            textInfoIndex2 = 0
        }

        htmlExpertsElements.imgExpert1.src = `src/img/experts/${arrayImgsTabletExperts1[imgIndexBlock1]}`
        htmlExpertsElements.imgExpert2.src = `./src/img/experts/${arrayImgsTabletExperts2[imgIndexBlock2]}`
        htmlExpertsElements.titleTextExpert1.textContent = `${arrayTitleTextExperts1[textTitleIndex1]}`
        htmlExpertsElements.titleTextExpert2.textContent = `${arrayTitleTextExperts2[textTitleIndex2]}`
        htmlExpertsElements.infoTextExpert1.textContent = `${arrayInfoTextExperts1[textInfoIndex1]}`
        htmlExpertsElements.infoTextExpert2.textContent = `${arrayInfoTextExperts2[textInfoIndex2]}`

        htmlExpertsElements.imgExpert1.classList.remove('hidden');
        htmlExpertsElements.imgExpert2.classList.remove('hidden');
        htmlExpertsElements.titleTextExpert1.classList.remove('hidden');
        htmlExpertsElements.titleTextExpert2.classList.remove('hidden');
        htmlExpertsElements.infoTextExpert1.classList.remove('hidden');
        htmlExpertsElements.infoTextExpert2.classList.remove('hidden')
    }, 1000)
}, 3000)
