// Experts
const tabletElements = {
    tabletImgExpert: document.querySelector("#tabletImgExpert"),
    tabletTitleTextExpert: document.querySelector("#tabletTitleTextExpert"),
    tabletInfoTextExpert: document.querySelector("#tabletInfoTextExpert"),
}

const arrayImgsTabletExperts = [
    'tablet1.png',
    'tablet2.png',
    'tablet3.png',
    'tablet4.png',
    'tablet5.png',
    'tablet6.png',
    'tablet7.png',
    'tablet8.png',
]

const arrayTitleTextTabletExperts = [
    "Твердохліб Андрій Валерійович",
    "Киселиця Владислав Юрійович",
    "Звягіна Майя Юріївна",
    "Бесчастний Олександр Олександрович",
    "Попеско Анастасія Ігорівна",
    "Пашков Валентин Валерійович",
    "Коваль Тетяна Валеріївна",
    "Олексюк Аліна"
]

const arrayInfoTextTabletExperts = [
    "Власник клінік, Терапевтичний прийом,Хірургічний прийом,Ортопедичний прийом.",
    "Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом",
    "Професійний догляд та профілактика.",
    "Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом",
    "Терапевтичний прийом, Дитячий прийом, Професійний догляд та профілактика",
    "Ортодонтичний прийом",
    "Асистент стоматолога",
    "Адміністратор"
]

let indexImgTablet = 0
let indexTitleTextTablet = 0
let indexInfoTextTablet = 0

setInterval(() => {
    tabletElements.tabletImgExpert.classList.add('hidden')
    tabletElements.tabletTitleTextExpert.classList.add('hidden')
    tabletElements.tabletInfoTextExpert.classList.add('hidden')

    setTimeout(() => {
        if (indexImgTablet != arrayImgsTabletExperts.length - 1 &&
            indexTitleTextTablet != arrayTitleTextTabletExperts.length - 1 &&
            indexInfoTextTablet != arrayInfoTextTabletExperts.length - 1) {
            indexImgTablet += 1
            indexTitleTextTablet += 1
            indexInfoTextTablet += 1
        } else {
            indexImgTablet = 0
            indexTitleTextTablet = 0
            indexInfoTextTablet = 0
        }

        tabletElements.tabletImgExpert.src = `./src/tablet/img/experts/${arrayImgsTabletExperts[indexImgTablet]}`
        tabletElements.tabletTitleTextExpert.textContent = `${arrayTitleTextTabletExperts[indexTitleTextTablet]}`
        tabletElements.tabletInfoTextExpert.textContent = `${arrayInfoTextTabletExperts[indexInfoTextTablet]}`

        tabletElements.tabletImgExpert.classList.remove('hidden')
        tabletElements.tabletTitleTextExpert.classList.remove('hidden')
        tabletElements.tabletInfoTextExpert.classList.remove('hidden')
    }, 1000)
}, 3000)


// Slider
const tabletImg = document.querySelector("#tabletImg")

const arrayImgsTablet = [
    '1.png',
    '2.png',
    '3.png',
]

let indexImgTabletWorks = 0

setInterval(() => {
    tabletImg.classList.add('hidden')

    setTimeout(() => {
        if (indexImgTabletWorks != arrayImgsTablet.length - 1) {
            indexImgTabletWorks += 1
        } else {
            indexImgTabletWorks = 0
        }

        tabletImg.src = `./src/img/works/${arrayImgsTablet[indexImgTabletWorks]}`

        tabletImg.classList.remove('hidden')
    }, 1000)
}, 3000)