# Connect to the Server

This explains how to get the Expo app on the **mobile device** to connect to the server on the **development machine**.

## Method 1

This method will allow the Expo app to connect to the server **wirelessly**.

1. Go to `config.js` on mobile directory and change `SERVER_IP_ADDRESS_FROM_EXPO_APP` to the IP address of the **development machine**. 
    - **Note**: Running the `run.sh` shell script in the backend directory will display the IP address of the **development machine**.

    - Example for `config.js`:
        ```
        const SERVER_IP_ADDRESS_FROM_EXPO_APP = "192.168.1.93"
        ```

2. Make sure `SERVER_IP_ADDRESS_FROM_EXPO_APP` is used for the `SERVER_URL`.

    - Example for `config.js`:
        ```
        export const SERVER_URL = "http://" + SERVER_IP_ADDRESS_FROM_EXPO_APP + ":" + PORT
        ```

## Method 2 (Android)

This method will allow the Expo app to connect to the server via **USB**. This method is meant for Android devices.

1. This method works if the following criteria are met:
    1. Your device is running Android 5.0 (Lollipop) or newer.
    2. USB debugging is enabled, and your device is connected to your development machine via USB.

2. Find the device name
    ```
    adb devices
    ```

3. Expose the server port to the Android device.
    ```
    adb -s <device name> reverse tcp:5000 tcp:5000
    ```

    - **Note**: The url `http://localhost:5000` should be accessible to the Android phone.

4. Go to `config.js` on mobile directory and change `SERVER_IP_ADDRESS_FROM_EXPO_APP` to localhost.

    - Example for `config.js`:
        ```
        const SERVER_IP_ADDRESS_FROM_EXPO_APP = "localhost"
        ```

5. Make sure `SERVER_IP_ADDRESS_FROM_EXPO_APP` is used for the `SERVER_URL`.

    - Example for `config.js`:
        ```
        export const SERVER_URL = "http://" + SERVER_IP_ADDRESS_FROM_EXPO_APP + ":" + PORT
        ```