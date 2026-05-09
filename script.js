document.addEventListener('DOMContentLoaded', () => {
    let oxygen = 100;
    const screen = document.getElementById('screen');
    const O2Text = document.getElementById('O2-level');
    const camName = document.getElementById('cam-name');

    const images = [
        "photo_2026-05-08_23-26-45.jpg",
        "mars_no_amogus.png",
        "mars_no_amogus2.png"
    ];

    // Початкова камера
    screen.style.backgroundImage = `url('${images[0]}')`;

    // Перемикання камер
    document.querySelectorAll('.btn-cam').forEach((btn, index) => {
        btn.onclick = ()=>{
            screen.style.backgroundImage = `url('${images[index]}')`;
            camName.innerText = `CAM 0${index + 1}`;
            
            
            if (index===0 && Math.random() > 0.7){ //Рандомний шанс появи аномалії на першій камері
                screen.style.backgroundImage = "url('photo_2026-05-08_23-26-39.jpg')";
            }
            if (index===1 && Math.random() > 0.7){ //Рандомний шанс появи аномалії на другій камері
                screen.style.backgroundImage = "url('mars_white_amogus.png')";
            }
            if (index===2 && Math.random() > 0.7){ //Рандомний шанс появи аномалії на третій камері
                screen.style.backgroundImage = "url('mars_yellow_amogus.png')";
            }
        };
    });

    document.getElementById('btn-vision').onclick = () => {
        screen.classList.toggle('night-vision');
    };

    setInterval(() => {
        if (oxygen > 0) {
            oxygen--;
            O2Text.innerText = oxygen;
        }
    }, 1000);

    document.getElementById('btn-refill').onclick = () => {
        oxygen = 100;
        O2Text.innerText = oxygen;
    };
});
