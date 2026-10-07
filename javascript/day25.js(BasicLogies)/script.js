//input
function add(){
    let n1=parseInt(document.getElementById("t1").value);
let n2=parseInt(document.getElementById("t2").value);
//process
let sum=n1+n2;
//output
// console.log("sum of ",n1  ,"and",n2," is" ,sum)
document.getElementById("t3").value=sum;
}


// let n1=20;
// let n2=30;
// let n3=90;
// let sum=n1+n2+n3;
// let avg=sum/3;
// console.log("the avg is : " ,avg)

function average(){
    let n1=parseInt(document.getElementById("a1").value)
    let n2=parseInt(document.getElementById("a1").value)
    let n3=parseInt(document.getElementById("a1").value)
    let result=(n1+n2+n3)/3
    document.getElementById("a4").value=result;
}



//sum of n  atural numbetrs
// let n=10
// let sum=n*(n+1)/2
// console.log(sum)

function sum(){
    let w=parseInt(document.getElementById("s1").value);
   let sum=w*(w+1)/2
    document.getElementById("s2").value=sum;
}

//avg
// let n=5;
// let sum=n*(n+1)/2;
// let avg=sum/5;
// console.log(avg)
function avg(){
    let n=parseInt(document.getElementById("aa1").value);
   let sum=n*(n+1)/2 ;
   let result=sum/n;
    document.getElementById("aa2").value=result;
}


// angles:180 for triangle
// let a1=56;
// let a2=76;
// let sum=a1+a2;
// let missing=180-sum;
// console.log(missing)

function angle(){
    let a1=parseInt(document.getElementById("an1").value);
    let a2=parseInt(document.getElementById("an2").value);
    let result=180-(a1+a2)
    document.getElementById("an3").value=result;

}

// let cp=30;
// let sp=40
// let p=(sp-cp)
// let percen=(p/cp)*100;
// console.log(percen)
function percen(){
    let cp=parseInt(document.getElementById("cp").value);
    let sp=parseInt(document.getElementById("sp").value);
    let profit=sp-cp;
    let percentage=(profit/cp)*100
document.getElementById("p").value=percentage;


}

// let p=30
// let t=4
// let r=2.5
// let product=p*t*r;
// let si=product/100;
// console.log(si)
function sim(){
    let p=parseInt(document.getElementById("p1").value);
    let t=parseInt(document.getElementById("t1").value);
    let r=parseInt(document.getElementById("r1").value);
    let percentage=(p*t*r)/100
document.getElementById("si1").value=percentage;
}



// function sim(){
//     let p=parseInt(document.getElementById("p1").value);
//     let t=parseInt(document.getElementById("t1").value);
//     let r=parseInt(document.getElementById("r1").value);
//     let product=p*t*r;
//     let sum=product/100;
//     document.getElementById("si1").value=sum;
// }