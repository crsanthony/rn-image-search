Welcome to our new image search app.

## Setup
I opted to try out [`create-react-native-app`](https://github.com/react-community/create-react-native-app) because I've really enjoyed the simplicity of [`create-react-app`](https://github.com/facebookincubator/create-react-app) and was beguiled by the ease of testing on multiple devices. I've included some notes on my experience at the end of this doc, but in the meantime:
- if you'd like to run this app as is, without cloning it to your own machine, Expo/RN has made it much easier to try it out without becoming a beta tester in the app store.  Just point your mobile browser to https://github.com/react-community/create-react-native-app, and you'll be prompted to download the expo mobile app.  Since the app is publicly available, you'll only need to open expo and create an account - from there you can just click on `image-search` and vioala, it will run as any other app would on your phone.
- running it in your local simulator should be almost as easy, but also requires downloading the Expo XDE. Head to https://expo.io/ and follow the very simple instructions.
- building from your local machine is also doable, but involves using `npm run eject`.  This will let you build do a device/simulator in the same way you normally would, but permanently separates you from the expo build configuration.
Should you want to build this way, you'll need to download the Expo XDE, and then :
- `git clone https://github.com/crsanthony/rn-image-search`;
- `npm start`
- open the Expo app and run via the 'Device' dropdown to confirm it's running ok in the simulator
- ok, now for ejecting.  This permanently changes the project, and the resulting project shouldn't be commited to this repo.  But this will give you full control over the build configuration and let you deploy to your device through Xcode or Android studio.
- ready? run `npm run eject` and follow the prompts. 
