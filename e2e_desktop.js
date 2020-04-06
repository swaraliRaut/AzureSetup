
exports.config = {

    "browserstackUser": "xxxxxxx",
    "browserstackKey": "xxxxxxxx",

    multiCapabilities: [
		//Apple

		// Safari
		{
			browserName: "Safari",
			os: "OS X",
			resolution: "1920x1080",
			os_version: "Catalina",
			project: "Selenium-Test",
			build: "Build T-Hour",
			name: "Safari - Happy Flow",
			"browserstack.debug": "true"
		},

		//Firefox

		{
			browserName: "Firefox",
			os: "OS X",
			resolution: "1920x1080",
			os_version: "Catalina",
			project: "Selenium-Test",
			build: "Build T-Hour",
			name: "Firefox - Happy Flow",
			"browserstack.debug": "true"
		}
	],

	maxSessions: 1,	

    specs: [
        "pagesDesktop/ikeaPage.js"
    ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        // isVerbose: true,
        // realtimeFailure: true,
        // includeStackTrace: true
    },

    SELENIUM_PROMISE_MANAGER: false,

    framework: "jasmine2",

    plugins: [{
        "package": "protractor-browserstack-reporter"
    }],

    reporters: ["browserstack"],

    params: {
        cardType: {
        }
    }
};