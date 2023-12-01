# Prevent Google Colab Runtime from Disconnecting
This repository contains a simple JavaScript code snippet that helps to prevent Google Colab’s runtime from disconnecting. This is particularly useful for long-running machine learning tasks.

## Credit
This code is based on the work of Patrick von Platen from Hugging Face. You can find the original post here.

## Usage
Open Google Colab and start your project.
Open the browser’s console. Here’s how you can do it in different browsers:
Chrome: Right click anywhere on the page and select Inspect, then click on Console.
Firefox: Right click anywhere on the page and select Inspect Element, then click on Console.
Copy the following code and paste it into the console, then press Enter:

```
function ConnectButton(){
    console.log("Connect pushed"); 
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click() 
}

var colab = setInterval(ConnectButton,60000);
```

This code will automatically click the Connect button every minute, which should prevent the Colab runtime from disconnecting due to inactivity.

## Stopping the Code
If you want to stop the code from running, you can use the clearInterval() function. Uncomment the following line and run it in the console:

```
clearInterval(colab)
```

This will stop the automatic clicking of the Connect button.

## Disclaimer
Please use this code responsibly and be aware of Google Colab’s usage policies. This code is intended to be a tool to help with long-running tasks and should not be used to circumvent Google Colab’s policies or terms of service. The author is not responsible for any misuse of this code. If you have any other questions, feel free to ask! 😊
