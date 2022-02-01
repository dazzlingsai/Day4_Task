const myrequest=new XMLHttpRequest();

myrequest.open("GET","https://restcountries.com/v3.1/all")
myrequest.send()

myrequest.onload=function(){ 
    if (myrequest.status==200){
        let c=JSON.parse(myrequest.responseText)
        c.map((m)=>{
            console.log(m.flags.png)
        })
    }
    else{
            console.log("Request Given not success")
        }
    myrequest.onerror=function(){    
        console.log("onerror function is a error forment")
    }
}
