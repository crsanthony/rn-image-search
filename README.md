Welcome to our new image search app.

## Setup
I opted to try out [`create-react-native-app`](https://github.com/react-community/create-react-native-app) because I've really enjoyed the simplicity of [`create-react-app`](https://github.com/facebookincubator/create-react-app) and was beguiled by the ease of testing on multiple devices. I've included some notes on my experience at the end of this doc, but in the meantime:
- if you'd like to run this app as is, without cloning it to your own machine, Expo/RN has made it much easier to try it out without becoming a beta tester in the app store.  Just:
- Download the Expo app from whatever app store you use.
- Create an account
- Point your mobile browser to `https://exp.host/@crsanthony/image-search` and viola, it should run as any other app would on your phone.
- running it in your local simulator is almost as easy, but requires downloading the Expo XDE to your local machine. Head to https://expo.io/ and follow the very simple instructions.
- building from your local machine is also doable, but involves using `npm run eject`.  This will let you build do a device/simulator in the same way you normally would, but permanently separates you from the expo build configuration.
Should you want to build this way, you'll need to download the Expo XDE, and then :
- `git clone https://github.com/crsanthony/rn-image-search`;
- `npm start`
- open the Expo app and run via the 'Device' dropdown to confirm it's running ok in the simulator
- ok, now for ejecting.  This permanently changes the project, and the resulting project shouldn't be commited to this repo.  But this will give you full control over the build configuration and let you deploy to your device through Xcode or Android studio.
- ready? run `npm run eject` and follow the prompts.

## Things I used to build this
- [`create-react-native-app`](https://github.com/react-community/create-react-native-app).  As mentioned above, this is a React Native supported method of bootstrapping RN applications, and testing/distributing without the need to use the app store.
- [`react-native-swiper`](https://github.com/leecade/react-native-swiper). Swiping made easy.  
- [`react-native`](https://github.com/facebook/react-native). Goes without saying, but react native is a framework for building native mobile apps without the heavy lifting of native code.
- [`redux`](https://github.com/reactjs/redux). A predictable state container for javascript apps.
- [pixabay api](https://pixabay.com/api/docs/).  Free and beautiful images via an easy to use api.  

## Notes/Known Issues:
- Swiping seemed like the natural behavior for viewing a particular feed item's detail, but capturing the feed item that was being touched proved difficult, since multiple feed items are visible at any time, and using `onPress` for the item itself (which would make it easy to pass up the item data) is not always triggered by a swipe on the `swipable` component.
Knowing that there's probably a reasonable way to solve for this, I kept `<Swiper>` and opted to have the user touch an image to view its detail, and then `swipe`, to return to the feed.  This would allow us to figure out the desired swipe behavior in a later iteration, while maintaining a reasonable ux for current users.

- I used a callback rather than an action to set the current detail photo. There's a good deal of discussion around whether UI specific information needs to be managed by a reducer, but my feeling is that if only one other component cares about the information (and that component is the parent), a callback is a reasonable way to pass that information around.

- I set out to create an orientation specific layout, and wrote a slightly hacky way of determining the orientation through `onLayout`.  This felt a bit overwrought and uneccessary.  However, the layout could be improved by using device dimensions to set widths for images et. al.

- The specs called for noting the image resolution in the detail info.  However, the pixabay api only provides pixel dimensions, and there's way to read resolution from an image rendered by an RN `Image`.  Thus, I fell back to listing dimensions for the original image.

  
