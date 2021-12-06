let btn=document.getElementById('btn');
let inputanswer=document.getElementById('inputanswer');
let scoree=document.getElementById('scoree');
let btn1=document.getElementById('btn1');
let inputanswer1=document.getElementById('inputanswer1');
let scoree1=document.getElementById('scoree1');
let btn2=document.getElementById('btn2');
let inputanswer2=document.getElementById('inputanswer2');
let scoree2=document.getElementById('scoree2');
let btn3=document.getElementById('btn3');
let inputanswer3=document.getElementById('inputanswer3');
let scoree3=document.getElementById('scoree3');
let btn4=document.getElementById('btn4');
let inputanswer4=document.getElementById('inputanswer4');
let scoree4=document.getElementById('scoree4');
let finalbutton=document.getElementById('finalbutton');

let arr=["1995","yes","Number","no","object"];
var score=0;

btn.addEventListener('click',function(){
if(inputanswer.value===arr[0])
{
score++;
scoree.innerHTML=`your answer is correct `;

}
else{
    scoree.innerHTML=`your answer is wrong`;   
}
    
})
btn1.addEventListener('click',function(){
    if(inputanswer1.value===arr[1])
    {
    score++;
    scoree1.innerHTML=`your answer is correct`;
    
    }
    else{
        scoree1.innerHTML=`your answer is wrong`;   
    }
        
    })
    btn2.addEventListener('click',function(){
        if(inputanswer2.value===arr[2])
        {
        score++;
        scoree2.innerHTML=`your answer is correct`;
        
        }
        else{
            scoree2.innerHTML=`your answer is wrong`;   
        }
            
        }) 
        btn3.addEventListener('click',function(){
            if(inputanswer3.value===arr[3])
            {
            score++;
            scoree3.innerHTML=`your answer is correct`;
            
            }
            else{
                scoree3.innerHTML=`your answer is wrong`;   
            }
                
            }) 
            btn4.addEventListener('click',function(){
                if(inputanswer4.value===arr[4])
                {
                score++;
                scoree4.innerHTML=`your answer is correct`;
                
                }
                else{
                    scoree4.innerHTML=`your answer is wrong`;   
                }
                    
                }) 
        finalbutton.addEventListener('click',function(){
            answer.innerHTML=`your score is ${score} out of 5`;
        })

       
    

