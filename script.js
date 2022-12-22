const id = document.querySelector('.id');
const it = document.querySelector('.it');

const random = (min, max) => {
    const rand =  Math.floor(Math.random() * (max + 1 - min) +min)
    return rand
}

id.addEventListener('mouseenter' , () => {
    id.style.left = `${random(0, 90)}% ` 
    // id.margin.left - id.margin.width
    // id.style.right = `${random(0, 90)}%`
    id.style.top = `${random(0, 90)}%`
    id.style.margin = 0
    // id.style.button = `${random(0, 90)}%`

})


it.addEventListener('click', () => {
    ('siz endi kotlar royxatidasiz !')
})

// randomfunction   static random = (min, max) => Math.floor(Math.random() * (max + 1 - min) +min)

// const random = (min, max) => {
//     const rand = (min, max) => Math.floor(Math.random() * (max + 1 - min) +min)
//     return rand
// }

