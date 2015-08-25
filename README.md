# JavaScript Tutorial for ClearBlade

This tutorial uses the ClearBlade JavaScript API to communicate with the ClearBlade Platform. This tutorial will help you get familiar with the ClearBlade Platform and give a brief explanation of concepts like Collections, Code Services, Libraries, Triggers, Timers and Messaging.

### Setup

#### Clone this repository 

- Do a ``` git clone https://github.com/ClearBlade/Tutorial-JavaScript.git ```

#### Editing part1.js to add the SystemKey, SystemSecret, PlatformURL and MessagingURL

- Navigate to Tutorial-JavaScript -> js and open part1.js in your choice of text editor and add your systemkey, systemsecret, platformURL and messagingURL
```javascript 
var initOptions = {
	URI : "YOUR_PLATFORMURL",
    messagingURI : "YOUR_MESSAGINGURL",
    messagingPort: 8904,
    useMQTT: true,
    cleanSession: true,
    systemKey: "YOUR_SYSTEMKEY",
    systemSecret: "YOUR_SYSTEMSECRET"  
}
```
- Save the file
  
  

Then open index.html in a browser and enjoy the tutorial!

