# Connect to the Server on Android

This explains how to get the Expo app on the **Android phone** to connect to the server on the **development machine**.

This method works if the following criteria are met:
1. Your device is running Android 5.0 (Lollipop) or newer,
2. USB debugging is enabled, and your device is connected to your development machine via USB.

Find the device name
```
adb devices
```

Expose the server port to the Android device.
```
adb -s <device name> reverse tcp:5000 tcp:5000
```

**Note**: The url `http://localhost:5000` should be accessible to the Android phone.

Go to `config.js` on mobile directory and make sure the `SERVER_IP_ADDRESS_FROM_EXPO_APP` is used for the `SERVER_URL`.

Example for `config.js`:
```
export const SERVER_URL = "http://" + SERVER_IP_ADDRESS_FROM_EXPO_APP + ":" + POR
```