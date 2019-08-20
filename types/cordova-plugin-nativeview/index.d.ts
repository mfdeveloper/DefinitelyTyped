// Type definitions for cordova-plugin-nativeview 1.0
// Project: https://github.com/mfdeveloper/cordova-plugin-nativeview
// Definitions by: Michel Felipe <https://github.com/mfdeveloper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CordovaPlugins {
	NativeView: NativeView;
}

interface ResultView {
	success: boolean;
	name?: string;
	message?: string;
	uri?: string;
	[key: string]: any;
  }

interface ResultAppInstalled extends ResultView {
	packageName?: string;
	applicationInfo?: string;
	activityName?: string;
}

interface NativeParams {
	package?: string;
	packageName?: string;
	packageApp?: string;
	className?: string;
	uri?: string;
	storyboardName?: string;
	viewControllerName?: string;
	params?: string;
}

interface NativeMarketParams extends NativeParams {
	marketId?: string;
}

interface NativeView {
	/**
	 * Shows the native view.
	 *
	 * Define the `packageOrClass` param to a package (Android) or a
	 * storyboard/classname (IOS).
	 *
	 * ```ts
	 * // Android
	 * cordova.plugins.NativeView.show({
	 * 	package: 'com.mycompany',
	 *  className: 'MyActivity'
	 * }).then((resultView) => {
	 * 	// Do something
	 * });
	 *
	 * // IOS
	 * cordova.plugins.NativeView.show({
	 * 	viewControllerName: 'MyUIViewController',
	 *  storyboardName: 'MyStoryboard'
	 * }).then((resultView) => {
	 * 	// Do something
	 * });
	 *
	 * //OR Back to previous View (IOS only)
	 * cordova.plugins.NativeView.show().then(() => {
	 * 	// Do something
	 * });
	 * ```
	 *
	 * @param packageOrClass Package or class name of view to open
	 * @param [className] Class name of view to open
	 * @param [extraParams] Params to send to a Native view that will be opened
	 * @param [success] Callback when success, if you don't want use promise `then()`
	 * @param [error] Callback when error happens, if you don't want use promise `catch()`
	 * @returns A promise with `ResultView` data of opened screen
	 */
	show(packageOrClass: NativeParams | string, className?: string, extraParams?: any, success?: (data: ResultView) => {}, error?: (err: any) => {}): Promise<ResultView>;
	/**
	 * Check if a specific app is installed
	 *
	 * @param config `config.package` A package app to verify if is installed
	 * @param [success] Callback when success, if you don't want use promise `then()`
	 * @param [error] Callback when error happens, if you don't want use promise `catch()`
	 * @returns A promise with `ResultAppInstalled` data information about installed app
	 */
	checkIfAppInstalled(config: NativeParams, success?: (data: ResultAppInstalled) => {}, error?: (err: any) => {}): Promise<ResultAppInstalled>;
	/**
	 * Shows a store/market fo install a specific app
	 *
	 * @param config Native `config.package` and/or `config.marketId` to show in Google Play/Apple Store
	 * @param [success] Callback when success, if you don't want use promise `then()`
	 * @param [error] Callback when error happens, if you don't want use promise `catch()`
	 * @returns A promise with `ResultView` data information about app in market/store
	 */
	showMarket(config: NativeMarketParams, success?: (data: ResultView) => {}, error?: (err: any) => {}): Promise<ResultView>;
	/**
	 * ### ANDROID ONLY
	 *
	 * Get the **Android** current build variant FLAVOR
	 * This is great if you change the FLAVOR in compile time
	 *
	 * @param config `config.catchError` True, if you wish catch a JSON with error information
	 * @param [success] Callback when success, if you don't want use promise `then()`
	 * @param [error] Callback when error happens, if you don't want use promise `catch()`
	 * @returns Returns a promise with a current FLAVOR string
	 */
	getBuildVariant(config: {catchError?: boolean}, success?: (flavor: string) => {}, error?: (err: any) => {}): Promise<string>;
}
