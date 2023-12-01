function ConnectButton(){
    console.log("Connect button pressed"); 
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click() 
}

var press = setInterval(ConnectButton,60000);

// uncomment the below line and use it for clearing

//clearInterval(press)
