
let q1 = document.getElementById(`q1`);
let a1 = document.getElementById(`a1`);
let ar1 = document.getElementById(`ar1`);

q1.addEventListener(`click`, function run() {

    if (a1.style.display != `block`) {
        a1.style.display = `block`
        q1.style.color = `black`
        q1.style.fontWeight = `bolder`
        ar1.style.transform = `rotate(180deg)`
        
    } else {
        a1.style.display = `none`
        ar1.style.transform = `rotate(360deg)`
        q1.style.color = `var(--Darkgrayishblue)`
        q1.style.fontWeight = `bold`

    }
})

let q2 = document.getElementById(`q2`);
let a2 = document.getElementById(`a2`);
let ar2 = document.getElementById(`ar2`);

q2.addEventListener(`click`, function run() {

    if (a2.style.display != `block`) {
        a2.style.display = `block`
        q2.style.color = `black`
        q2.style.fontWeight = `bolder`
        ar2.style.transform = `rotate(180deg)`
        
    } else {
        a2.style.display = `none`
        ar2.style.transform = `rotate(360deg)`
        q2.style.color = `var(--Darkgrayishblue)`
        q2.style.fontWeight = `bold`

    }
})

let q3 = document.getElementById(`q3`);
let a3 = document.getElementById(`a3`);
let ar3 = document.getElementById(`ar3`);

q3.addEventListener(`click`, function run() {

    if (a3.style.display != `block`) {
        a3.style.display = `block`
        q3.style.color = `black`
        q3.style.fontWeight = `bolder`
        ar3.style.transform = `rotate(180deg)`
        
    } else {
        a3.style.display = `none`
        ar3.style.transform = `rotate(360deg)`
        q3.style.color = `var(--Darkgrayishblue)`
        q3.style.fontWeight = `bold`

    }
})

let q4 = document.getElementById(`q4`);
let a4 = document.getElementById(`a4`);
let ar4 = document.getElementById(`ar4`);

q4.addEventListener(`click`, function run() {

    if (a4.style.display != `block`) {
        a4.style.display = `block`
        q4.style.color = `black`
        q4.style.fontWeight = `bolder`
        ar4.style.transform = `rotate(180deg)`
        
    } else {
        a4.style.display = `none`
        ar4.style.transform = `rotate(360deg)`
        q4.style.color = `var(--Darkgrayishblue)`
        q4.style.fontWeight = `bold`

    }
})

// let q5 = document.getElementById(`q5`);
// let a5 = document.getElementById(`a5`);
// let ar5 = document.getElementById(`ar5`);

// q5.addEventListener(`click`, function run() {

//     if (a5.style.display != `block`) {
//         a5.style.display = `block`
//         q5.style.color = `black`
//         q5.style.fontWeight = `bolder`
//         ar5.style.transform = `rotate(180deg)`
        
//     } else {
//         a5.style.display = `none`
//         ar5.style.transform = `rotate(360deg)`
//         q5.style.color = `var(--Darkgrayishblue)`
//         q5.style.fontWeight = `bold`
//     }
// })


// let a5 = document.getElementById(`a5`);
// let ar5 = document.getElementById(`ar5`);

let qa5 = document.getElementById(`qa5`);

qa5.childNodes[1].onclick = run

function run() {
    
    let q = qa5.childNodes[1];
    let a = qa5.childNodes[3];
    let ar = q.childNodes[1];
    if (a.style.display != `block`) {
        a.style.display = `block`
        q.style.color = `black`
        q.style.fontWeight = `bolder`
        ar.style.transform = `rotate(180deg)`
        
    } else {
        a.style.display = `none`
        ar.style.transform = `rotate(360deg)`
        q.style.color = `var(--Darkgrayishblue)`
        q.style.fontWeight = `bold`
    }
}
            
    
// let qa5 = document.getElementById(`qa5`);
//  console.log(qa5.childNodes)