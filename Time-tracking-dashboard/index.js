let menu = document.querySelectorAll('.profil__option-btn')
let daily = document.getElementById('btn-daily');
let weekly = document.getElementById('btn-weekly');
let monthly = document.getElementById('btn-monthly');
let hours = document.querySelectorAll('.card__content-time');
let last = document.querySelectorAll('.last');

menu.forEach(element => {  
    element.addEventListener('click', menuOnclick);
});

fetch('data.json')
    .then(res => res.json())
    .then(data => {

        daily.addEventListener('click', () => {
            hours.forEach((element, i) => {
                element.innerHTML = data[i].timeframes.daily.current + 'hrs'
            })
            last.forEach((element, i) => {
                element.innerHTML = data[i].timeframes.daily.previous + 'hrs'
            })
        })
        
        weekly.addEventListener('click', () => {
            hours.forEach((element, i) => {
                element.innerHTML = data[i].timeframes.weekly.current + 'hrs'
            })
            last.forEach((element, i) => {
                element.innerHTML = data[i].timeframes.weekly.previous + 'hrs'
            })
        })
        
        monthly.addEventListener('click', () => {
            hours.forEach((element, i) => {
                element.innerHTML = data[i].timeframes.monthly.current + 'hrs'
            })
            last.forEach((element, i) => {
                element.innerHTML = data[i].timeframes.monthly.previous + 'hrs'
            })
        })
    })

function menuOnclick (event){
    menu.forEach(element =>{
        element.classList.remove("profil__option-btn--is-active")
    })
    event.target.classList.add("profil__option-btn--is-active")
}
