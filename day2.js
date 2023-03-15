//next butonuna basıp ileriye geçmesini, prev butonuna basıp geri gitmesini istiyoruz
const progress = document.querySelector('.progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1; //aktif olanı temsil eder, varsayılan olarak 1 ayarlarız

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length; //bu son dairede sabit kalmasını sağlayacak
    }
    update();
}) //next butonuna beklediğimiz olayı tanımlıyoruz,,, click
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1; //currentAcvite 1den küçük olursa 1de sabit kaldığımızı söyler
    }
    update();
})
function update() {
    //düğüm listesi olan daireler
    circles.forEach((circle, index) => {
        //console.log(circle, index)  her bir daireyi ve indexini yazdırır
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    });
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    //Uncaught TypeError: Cannot read properties of null (reading 'style') hatasını almıştım, yukarıda progress classını getElementById ile aldığımda;;;;; bunu --> const progress = document.querySelector('.progress') bu şekilde değiştirdiğimde hata da düzeldi

    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}