/// <reference types="cordova"  />

// $ExpectType Promise<ResultView>
cordova.plugins.NativeView.show({
    package: 'org.example',
    className: 'MyClass'
});

// $ExpectType Promise<ResultView>
cordova.plugins.NativeView.showMarket({
    uri: 'market://details?id=my.package'
});

// $ExpectType Promise<ResultAppInstalled>
cordova.plugins.NativeView.checkIfAppInstalled({
    package: 'org.example'
});

// $ExpectType Promise<string>
cordova.plugins.NativeView.getBuildVariant({
    catchError: true
});
