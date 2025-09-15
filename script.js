let text = document.getElementsByTagName("h1")
console.log(text[0].innerHTML)
let buttons = document.getElementsByTagName('button');
let ans = ""
let input = document.getElementsByTagName('input')[0]
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        answer = buttons[i].innerHTML
        console.log(answer)
        if(answer === '='){
            try{
                ans = eval(ans)
                input.value = ans
                console.log(ans)
            }
            catch{
                console.log("Error")
            }
            if(input.value === 'undefined'){
                ans = ''
            }
        }
        else if(answer === 'AC'){
            ans = ''
            input.value = 0
        }
        else{
            ans+=answer
            input.value = ans
            
        }
    })
}

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        try {
            ans = eval(input.value);  // Sync ans with evaluated result
            input.value = ans;
        } catch {
            input.value = "Error";
        }
    }
});

