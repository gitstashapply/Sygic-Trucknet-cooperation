# Sygic - Trcuknet demo apk

Hello there! Here is pretty simple code base for our cooperation. Let's start with instalation.

## Getting started:
1) First of all we need to install Node and npm (if it's not installed) - https://nodejs.org/

Check that the Node installed:
```javascript
node -v
```
Check that the npm installed:
```javascript
npm -v
```

2) Secondly, we need to install react-native-cli - ``` npm install -g react-native-cli ```
3) Next step - copy repository, after that, install all the packages
```
cd Sygic-Trucknet-cooperation
npm install
```

4) !!!IMPORTANT in file ``` android/local.properties ``` you should edit your path to your Android system folder:

e.g.: ``` sdk.dir = /Users/{USER_NAME}/Library/Android/sdk ```

5) Run on emulator:
- turn on Android studio,
- turn on emulator
- run ``` react-native run-android ```

If all correct, the application should start on your emulator.

If you will have some issues - https://facebook.github.io/react-native/docs/getting-started.html - this is react-native documentation for Getting started
or write me the email

## What do we have inside?

So, the most important question - what do we need and how it works.
This app now have only 2 screens:
1) Main screen.
2) Map screen.

### Main screen
 At this screen I want to show you - how native java components works with react-native and javascript thread.
 
 Here we got textInput, Button and our native Toast module.
 
 If you will press the Button, the text, that you wrote in input will be shown like toast notification.
 
 Let's go little bit inside:
 
 1) In ``` ~/android/app/java/ ``` folder, we have 4 classes:
 1. MainActivity.java - Returns the name of the main component registered from JavaScript. This is used to schedule rendering of the component.
 2. MainApplication.java - class that describes all packages that we exporting from native thread
 3. NToastModule.java - This is a most important stuff. Here we create a new simple module, that we export and use in our react-native thread.
 Little stuff about this module:
 - it's native Toast
 - it can pass props (duration, text)
 
 So this is a main point. From our side we know how to import native modules, but we can not set it up correct. 
 ### Our main task is create and export java module, that can pass props from javascript thread.
 
 4. NToastPackage.java - this class package your module.
 
 More info about native modules you can see here: https://facebook.github.io/react-native/docs/native-modules-android.html
 
 ### Map screen
 
 Here is the screen to our module, that we should do. It's pretty simple now. Here we have only card with ride info and place for navigation.
 
 ## Problems that we need to fix:
 
 In our app, there will be a tab where users can see a route for their current ride. Our app will invoke Sygic SDK and programmatically fill all required parameters, as those are already in the system: truck weight and dimensions, start and end points. 

There should be no possibility for the user to create a custom route, so default UI elements of the navigator should not be visible. Also, there should be no necessity for the user to download any maps, as we already know in which geographical area the ride will take place, therefore, there should be an ability for us to request maps downloads programmatically. 

Considering the possibility that during an international ride driver could pass more than one country it would be nice to have the ability to build a route programmatically and inspect it in order to figure out which maps should be downloaded.

So, to sum it up, we need:
1. Ability to hide UI elements purposed for setting the destination point
2. Ability to set ride parameters programmatically
3. Ability to download maps programmatically
4. Ability to create route before the map is downloaded and inspect it to figure out which maps should be downloaded
