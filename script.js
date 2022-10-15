days = document.getElementById('days')
hours = document.getElementById('hours')
minutes = document.getElementById('minutes')
seconds = document.getElementById('seconds')
countdown = document.getElementById('countdown')
year = document.getElementById('year')
loading = document.getElementById('loading')



currentYear = new Date().getFullYear()

year.innerText = currentYear + 1
newYearTime = new Date(`1.1.${currentYear +1} 00:00:00`)


function updateCountdown(){
    currentTime = new Date()
    diff = newYearTime - currentTime

d = Math.floor(diff/1000/60/60/24)
h = Math.floor(diff/1000/60/60)%24
m = Math.floor(diff/1000/60)%60
s = Math.floor(diff/1000)%60

days.innerText = d
hours.innerText = h<10 ?'0'+h:h
minutes.innerText = m<10 ? '0'+m:m
seconds.innerText = s<10 ? '0' +s:s
 

}

setTimeout(()=>{
    loading.remove()
    countdown.style.display = 'flex'
},1000)

setInterval(updateCountdown,1000)
