/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/focusLastOpenedWindow.js */
/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
/* eslint-disable no-unused-vars */
module.exports = (obsolete) => {
/* eslint-enable no-unused-vars */
	/**
     * The last opened window
     * @type {Object}
     */
	const lastWindowHandle = browser.windowHandles().value.slice(-1)[0];

	browser.window(lastWindowHandle);
};
