let tg = window.Telegram.WebApp;
tg.expand();


tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let vipPosts = 0;
let posts = 0;
let stories = 0;
// let total = 0;

items = []

let add1 = document.getElementById('add1')
let remove1 = document.getElementById('remove1')

let add2 = document.getElementById('add2')
let remove2 = document.getElementById('remove2')

let add3 = document.getElementById('add3')
let remove3 = document.getElementById('remove3')


function check() {
    let total = countTotalPrise()
    if (total == 0) {
        tg.MainButton.hide()
    }
}

function countTotalPrise() {
    let total = 0
    items.forEach(item => {
        total = total + item.value
    });
    return total
}

add1.addEventListener("click", function () {
    items.push({ key: "vipPost", value: 50000 })
    let total = countTotalPrise()
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`);
    tg.MainButton.show();
    check()
})

remove1.addEventListener("click", function () {
    let index = items.findIndex(obj => obj.key === 'vipPost')
    if (index !== -1) {
        items.splice(index, 1)
    }
    let total = countTotalPrise()
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})


add2.addEventListener("click", function () {
    items.push({ key: "post", value: 18000 })
    let total = countTotalPrise()
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

remove2.addEventListener("click", function () {
    let index = items.findIndex(obj => obj.key === 'post')
    if (index !== -1) {
        items.splice(index, 1)
    }
    let total = countTotalPrise()
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

add3.addEventListener("click", function () {
    items.push({ key: "stories", value: 10000 })
    let total = countTotalPrise()
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

remove3.addEventListener("click", function () {
    let index = items.findIndex(obj => obj.key === 'stories')
    if (index !== -1) {
        items.splice(index, 1)
    }
    let total = countTotalPrise()
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    tg.sendData(vipPosts, posts, stories, total)
})






