/*
 * Create and export configuration variables
 *
 */

// Container for all the environments
var environments = {};

// Staging (default) environment
environments.staging = {
	'httpPort': 1000,
	'httpsPort': 1001,
	'envName': 'staging',
	'hashingSecret': 'thisIsASecret',
	'maxOrders': 5,
	'twilio': {
		'accountSid': 'AC3d9f0c7cbcd01b34c80ae44f7d262b9a',
		'authToken': 'db501e3b6fd065354ac1a2ee910db1f7',
		'fromPhone': '+126106009686',
		'toPhone': '+12072260971'
	},
	'templateGlobals': {
		'appName': 'RuleChecker',
		'companyName': 'Meet the Compobulator!',
		'yearCreated': '2019',
		'baseUrl': 'http://localhost:1000/'
	}
};

// Production environment
environments.production = {
 	'httpPort': 2000,
 	'httpsPort': 2001,
 	'envName': 'production',
	'hashingSecret': 'thisIsAlsoASecret',
	'maxOrders': 5,
	'twilio': {
		'accountSid': 'AC3d9f0c7cbcd01b34c80ae44f7d262b9a',
		'authToken': 'db501e3b6fd065354ac1a2ee910db1f7',
		'fromPhone': '+126106009686',
		'toPhone': '+12072260971'
	},
	'templateGlobals': {
		'appName': 'RuleChecker',
		'companyName': 'Meet the Compobulator!',
		'yearCreated': '2019',
		'baseUrl': 'http://localhost:2000/'
	}
};

// Determine which environment was passed as command-line arg
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ?
	process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above;
// if not, default it to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ?
	environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;
