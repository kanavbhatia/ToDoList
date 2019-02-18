let input = $('#inp');
let addBtn = $('#btn');
let result = $('#res');
let taskArray = [];
let initialDisplay = true;
let updateBtn = $('#updateBtn');
let updateText = $('#updateText');


if (initialDisplay){
    for(let i=0;i<taskArray.length;i++){
        // $('#res').append(`<li>${taskArray[i]}</li>`)

        let li = document.createElement('li');
        let text = document.createTextNode(taskArray[i]);
        let rbtn = document.createElement('button')
        let ubtn = document.createElement('button')
        let hr = document.createElement('hr')
        rbtn.append('Remove')
        ubtn.append('Update')
        li.append(text);
        li.append(ubtn);
        li.append(rbtn);
        li.append(hr)
        result.append(li);
        console.log(taskArray)
        initialDisplay = false
}}


addBtn.click(function(){
    display()
    input = input.val('')
})
input.keypress(function(){
    if (event.keyCode ==13){
        display()
       input = input.val('')
    } 
})

function display(){
    var value = '';
    value=$('#inp').val()
    let v = taskArray.length
    taskArray.push(value)
    for(let i=v;i<taskArray.length;i++){
        let li = document.createElement('li');
        let text = document.createTextNode(taskArray[i]);
        let rbtn = document.createElement('button')
        let ubtn = document.createElement('button') 
        // let checkbox = document.createElement('input')
        let hr = document.createElement('hr')
        rbtn.append('Remove')
        ubtn.append('Update')
        li.append(text);
        // console.log(li.appendChild(text));
        li.append(ubtn);
        li.append(rbtn);
        li.append(hr)
        result.append(li);
        console.log(taskArray)    
        req()
        rbtn.addEventListener('click', function(){
            let index = taskArray.indexOf(value)
            li.remove()
            taskArray.splice(index,1)
            console.log('Remove button pressed')
            console.log(taskArray)
            req()
        //jis bhi remove button ko click hoyega uski li ko remove karna hai 
            })
            ubtn.addEventListener('click',function(){
                console.log('Update button pressed')
                let index = taskArray.indexOf(value) // why taking value refered here?
                updateBtn.removeAttr('disabled');
                updateText.removeAttr('disabled');
                updateBtn.click(function(){
                    // let index = taskArray.indexOf(value) 
                    console.log('Value updated')
                    let newVal = updateText.val()
                    // //to add new value
                    // taskArray.splice(index,0,newVal)
                    // //to remove old value
                    // taskArray.splice((index+1),1)
                    let oldWorld = value;
                    result = oldWorld.replace(value, newVal)
                    req()
                    // initialDisplay()
                })
                console.log(taskArray)
                
                updateBtn.attr('disabled');
                updateText.attr('disabled');
            })
    }      
}







// to send data to database
function req(){
    let url = `/list`;
    fetch(url,{
        method:'POST',
        body: taskArray
    })  
    // $.post(`/list`,{'body': input.val()})
}
//instead of sending whole array can we send only one element which needs to be send   ???



































    // $.each(taskArray,function(index,value){
        
    //             // li.append(checkbox)
    //             
    //             li.append(hr);
    //             //jquery mein its append() not appendChild()
        


// rbtn.setAttribute('id', 'removal')
// ubtn.setAttribute('id', 'upd')
// button.click(function(){
//     let value = input.val()
//     console.log('Clicked')
//     add(value)
//     input.val('')
//     req()
// })
// input.keypress(function(){
//     let value = input.val()
//     if (event.keyCode ==13){
//         console.log('Entered')
//         add(value)
//         input.val('')
//         req()
//     }
// })

// function layout(val){

// }

// function add(value){
//     $.each(taskArray,function(index,value){
        
//         // li.append(checkbox)
//         rbtn.append('Remove')
//         ubtn.append('Update')
//         li.append(text);
//         taskArray.push(value)
//         // console.log(li.appendChild(text));
//         li.append(ubtn);
//         li.append(rbtn);
//         result.append(li);
//         li.append(hr);
//         //jquery mein its append() not appendChild()

//     rbtn.addEventListener('click', function(){
//         let index = taskArray.indexOf(value)
//         li.remove()
//         taskArray.splice(index,1)
//         console.log('Remove button pressed')
//         console.log(taskArray)
//         //jis bhi remove button ko click hoyega uski li ko remove karna hai 
//     })

//     
// })
// }
// //use addEventListener('click', function(){
// // }) it will listen everything which is clicked



// // update button functionality 
// // connect it with server
// // css