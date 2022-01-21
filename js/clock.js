

    const days = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];

    const  date = new Date()
    let day = days [date.getDay()]
    let hour = date.getHours()
    let minute = date.getMinutes()
    let clock = document.querySelector("#myClock");
    
    clock.innerHTML = `${clock.innerHTML} ${hour}:${minute} ${day}`
