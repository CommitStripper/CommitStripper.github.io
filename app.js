let tg = window.Telegram.WebApp;
tg.expand();


tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let vipPosts = 0;
let posts = 0;
let stories = 0;
let total = 0;

let add1 = document.getElementById('add1')
let remove1 = document.getElementById('remove1')

let add2 = document.getElementById('add2')
let remove2 = document.getElementById('remove2')

let add3 = document.getElementById('add3')
let remove3 = document.getElementById('remove3')


function check() {
    if (total == 0) {
        tg.MainButton.hide()
    }
}

add1.addEventListener("click", function () {

    total = total + 50000
    vipPosts = vipPosts + 1
    console.log(total);
    tg.MainButton.setText(`Всего: ${total}`);
    tg.MainButton.show();
    check()
})

remove1.addEventListener("click", function () {
    total = total - 50000
    if (total <= 0) {
        total = 0
    }
    vipPosts = vipPosts - 1
    if (vipPosts <= 0) {
        vipPosts = 0
    }
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})


add2.addEventListener("click", function () {
    total = total + 18000
    posts = posts + 1
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

remove2.addEventListener("click", function () {
    total = total - 18000
    if (total <= 0) {
        total = 0
    }
    posts = posts + 1
    if (posts <= 0) {
        posts = 0
    }
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

add3.addEventListener("click", function () {
    total = total + 10000
    stories = stories + 1
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

remove3.addEventListener("click", function () {
    total = total - 10000
    if (total <= 0) {
        total = 0
    }
    stories = stories - 1
    if (stories <= 0) {
        stories = 0
    }
    console.log(total)
    tg.MainButton.setText(`Всего: ${total}`)
    tg.MainButton.show();
    check()
})

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    tg.sendData(vipPosts, posts, stories, total)
})






