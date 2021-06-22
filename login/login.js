var objpeople = [
    {
        username: "lois",
        password: "sia1234"
    },
    {
      username: "seo",
      password: "12234"
    },
    {
        username: "alex",
        password: "holasd234"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    for(i = 0; i < objpeople.length; i++){
       
        if(username == objpeople[i].username && password == objpeople[i].password){
            console.log(username + " is logged in!")
            return

        }
        
    }
    console.log('error password or username incorrect')

}