# Installation

### 1. Clone the repository

```
git clone https://github.com/ShearesWeb/sheares-app-frontend.git
```

### 2. Install libraries

```
>>> npm ci
```

### 3a. [Install Android (Windows Users)](https://reactnative.dev/docs/environment-setup?guide=native)

Follow the guide [here](https://reactnative.dev/docs/environment-setup?guide=native) for installing Android Studio.

At the time of writing the linked guide is outdated and written for Android 13. For Android 14, just note that we are on version 34.

Once you've finished the installation, make sure you have a virtual device as seen [here](https://docs.expo.dev/workflow/android-studio-emulator/#set-up-a-virtual-device).

### 3b. Install Android & IOS (Mac Users)

Follow Both Android and IOS setup.

Android:

Follow the guide [here](https://reactnative.dev/docs/environment-setup?guide=native) for installing Android Studio.
Once you've finished the installation, make sure you have a virtual device as seen [here](https://docs.expo.dev/workflow/android-studio-emulator/#set-up-a-virtual-device).

IOS:

Install Xcode from Mac App Store. 
Launch Xcode, a dialog will be presented that indicates which Simulator runtimes are built-in, and which Simulator runtimes you may download. For now, choose Continue to finish setting up Xcode.

Once you've finished setting up, install IOS Simulators using this guide [here](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators).

This step helps to set up an IOS Simulator on your MacOS, allowing you to initiate any emulators from other code editors, E.g. VSCode, Android Studios, or Terminal.


### 4. Add the ```.env``` file

Add to the base directory. If you don't have it ask someone for it.
Take note of the "." infront of env when downloading on MacOS.


### 5. Run
```
>>> npm run android
>>> npm run ios
```

### 6. Fixes
Possible Issues for MacOS:
1. ⚠️  Something went wrong running `pod install` in the `ios` directory. 

Solution:

```
>>> gradle init
› 2: application
› 4: Kotlin
› Generate multiple subprojects for application? No
› Kotlin
>>> npx expo start --dev-client
```
```
› Press a │ open Android
› Press i │ open iOS simulator
```

