let btn=document.getElementById('button');
let gpa=document.getElementById('gpa');
let grades={'A+':4,'A':3.7,'B+':3.3,'B':3,'C+':2.7,'C':2.4,'D+':2.2,'D':2,'F':0}
btn.addEventListener('click',function(){
    let g=document.querySelectorAll('.grades');
    let h=document.querySelectorAll('.hours');
    let sumOfPoints=0;
    let sumOfHours=0;
    for(let i=0;i<h.length;i++){
        if(h[i]!=''){
            sumOfPoints+=grades[g[i].value]*h[i].value;
            sumOfHours+=Number(h[i].value);
        }
    }
    gpa.innerHTML=sumOfPoints/sumOfHours;
})