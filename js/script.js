

// setInterval(()=>{
//     let hours = document.getElementById('hours');
//     let minutes = document.getElementById('minutes');
//     let seconds = document.getElementById('seconds');

//     let ampm =document.getElementById('ampm');

//     let hh = document.getElementById('hh');
//     let mm = document.getElementById('mm');
//     let ss  = document.getElementById('ss');


//     let dotH = document.getElementById('.h_dot');
//     let dotM = document.getElementById('.m_dot');
//     let dotS = document.getElementById('.s_dot');

//     // to get current time
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();

//     if(h>12){
//         h= h -12;
//     }

//     h = h<10 ? '0' + h : h;
//     m = h<10 ? '0' + m : m;
//     s = h<10 ? '0' + s : s;


//     hours.innerHTML = h + 'Hours';
//     minutes.innerHTML = m + 'Minutes';
//     seconds.innerHTML = s + 'Seconds';
//     ampm.innerHTML = ap;

//     hh.style.strokeDashoffset = 314 - (314*h)/12;
//     mm.style.strokeDashoffset = 314 - (314*h)/60;
//     ss.style.strokeDashoffset = 314 - (314*h)/60;

//     dotH.style.transform = `rotate(${h*30}deg)`;
//     dotM.style.transform = `rotate(${m*6}deg)`;
//     dotS.style.transform = `rotate(${s*6}deg)`;


// }, 1000)



setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    
    let ampm = document.getElementById('ampm');
    
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');

    // to get current time
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h > 12) {
        h -= 12;
        var ap = 'PM';
        ampm.innerHTML = ap;
    } else {
        var ap = 'AM';
        ampm.innerHTML=ap;
    }

    h= h < 10 ? '0' + h : h;
	m= m < 10 ? '0' + m : m;
	s= s < 10 ? '0' + s : s;

	hours.innerHTML= h+ ' Hours';
	minutes.innerHTML= m+ ' Minutes';
	seconds.innerHTML= s+ ' Seconds';

	hh.style.strokeDashoffset= 314 - (314*h)/12;
	mm.style.strokeDashoffset= 314 - (314*m)/60;
	ss.style.strokeDashoffset= 314 - (314*s)/60;

	dotH.style.transform=`rotate(${(h*30)+(m/2)}deg)`;
	dotM.style.transform=`rotate(${6*m}deg)`;
	dotS.style.transform=`rotate(${6*s}deg)`;

}, 1000);
