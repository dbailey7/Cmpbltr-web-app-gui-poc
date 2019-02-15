/*
 * Request handlers
 */

// Dependencies
var _data = require('./data');
var helpers = require('./helpers');
var config = require('./config');

// Container for the handlers
var handlers = {};

/*
// Sample handler
handlers.sample = function(data, callback){
	// Callback an http status code, and a payload object
	callback(406, {'name' : 'sample handler'});
};
*/

/*
 * HTML API Handlers ...
 */

// Index handler
handlers.index = function(data, callback){

  // Reject any request that isn't a GET
  if(data.method == 'get'){

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Meet the Compobulator!',
      'head.description': 'Now, that\'s a cool rule!',
      'body.class': 'index'
    };

    // Read in a template as a string
    helpers.getTemplate('index', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str){
          if(!err && str){
            // Return that page as html
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }

};

// Create Account handler
handlers.accountCreate = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Create an Account',
      'head.description': 'Signup only takes a few seconds.',
      'body.class': 'accountCreate'
    };

    // Read in a template as a string
    helpers.getTemplate('accountCreate', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str){
          if(!err && str){
            // Return that page as html
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Create New Session handler
handlers.sessionCreate = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Login to your Account',
      'head.description': 'Please enter your phone number and password to access your account.',
      'body.class': 'sessionCreate'
    };

    // Read in a template as a string
    helpers.getTemplate('sessionCreate', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str){
          if(!err && str){
            // Return that page as html
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};


// Edit your account
handlers.accountEdit = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Prepare data for interpolation
    var templateData = {
      'head.title' : 'Account Settings',
      //'head.description' : 'Don\'t need this metadata.',
      'body.class' : 'accountEdit'
    };
    // Read in a template as a string
    helpers.getTemplate('accountEdit', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str){
          if(!err && str){
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Session has been deleted
handlers.sessionDeleted = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Prepare data for interpolation
    var templateData = {
      'head.title' : 'Logged Out',
      'head.description' : 'You have been logged out of your account.',
      'body.class' : 'sessionDeleted'
    };
    // Read in a template as a string
    helpers.getTemplate('sessionDeleted', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str){
          if(!err && str){
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Account has been deleted account
handlers.accountDeleted = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Prepare data for interpolation
    var templateData = {
      'head.title' : 'Account Deleted',
      'head.description' : 'Your account has been deleted.',
      'body.class' : 'accountDeleted'
    };
    // Read in a template as a string
    helpers.getTemplate('accountDeleted', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str){
          if(!err && str){
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Create an Rule
handlers.rulesCreate = function(data, callback){

  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Prepare data for interpolation
    var templateData = {
      'head.title' : 'Create a New Rule',
      'body.class' : 'rulesCreate'
    };

    // Read in a template as a string
    helpers.getTemplate('rulesCreate', templateData, function(err, str){

      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str){
          if(!err && str){
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Rule Information (View all rules)
handlers.rulesList = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Prepare data for interpolation
    var templateData = {
      'head.title' : 'Rule Information',
      'body.class' : 'rulesList'
    };
    // Read in a template as a string
    helpers.getTemplate('rulesList', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str){
          if(!err && str){
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Edit an rule
handlers.rulesedit = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Prepare data for interpolation
    var templateData = {
      'head.title' : 'Rule Details',
      'body.class' : 'rulesedit'
    };
    // Read in a template as a string
    helpers.getTemplate('rulesedit', templateData, function(err, str){
      if(!err && str){
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str){
          if(!err && str){
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Favicon handler
handlers.favicon = function(data, callback){
  // Reject any request that is not a get
  if(data.method == 'get'){
    // Read in the favicon's data
    helpers.getStaticAsset('meed-favicon.ico', function(err, data){
      if(!err && data){
        callback(200, data, 'favicon');
      } else {
        callback(500);
      }
    });
  } else {
    callback(405);
  }
}

// Public assets
handlers.public = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Get the filename being requested
    var trimmedAssetName = data.trimmedPath.replace('public/', '').trim();
    if(trimmedAssetName.length > 0){
      // Read in the asset's data
      helpers.getStaticAsset(trimmedAssetName, function(err, data){
        if(!err && data){
          // Detrmine the content type, default to plain text
          var contentType = 'plain';

          if(trimmedAssetName.indexOf('.css') > -1){
            contentType = 'css';
          }

          if(trimmedAssetName.indexOf('.png') > -1){
            contentType = 'png';
          }
          if(trimmedAssetName.indexOf('.jpg') > -1){
            contentType = 'jpg';
          }

          if(trimmedAssetName.indexOf('.ico') > -1){
            contentType = 'favicon';
          }

          // Callback the data
          callback(200, data, contentType);

        } else {
          callback(404);
        }
      });
    } else {
      callback(404);
    }
  } else {
    callback(405);
  }
};

/*
 * JSON API Handlers ...
 */

// Ping handler
handlers.ping = function(data, callback){
 callback(200);
};

// Not found handler
handlers.notFound = function(data, callback){
 console.log('Ooooo, we didn\'t find a handler!')
	callback(404);
};

// Users handlers
handlers.users = function(data, callback){
  // Figure out what method is requested and pass it along to subhandlers
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._users[data.method](data, callback);
  } else {
    callback(405);  // 405 is http status code for method not allowed
  }
};

// Container for the users subhandlers
handlers._users = {};

// Users - post subhandler (for use with handlers.accountCreate, er creating accounts)
// Required data: firstname, lastname, phone, email, password, tosAgreement (um, terms of svc)
// Optional data: none
handlers._users.post = function(data, callback){
  // Check that all required fields are valid
  var firstName = typeof(data.payload.firstName) == 'string'  && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  var lastName = typeof(data.payload.lastName) == 'string'  && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  var phone = typeof(data.payload.phone) == 'string'  && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;
  var email = typeof(data.payload.email) == 'string'  && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
  var password = typeof(data.payload.password) == 'string'  && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  var tosAgreement = typeof(data.payload.tosAgreement) == 'boolean'  && data.payload.tosAgreement == true ? true : false;
  //console.log('D E B U G --> handlers.js line 413 _users.post required fields --> firstName: ' + firstName + '; lastName: ' + lastName + '; phone: ' + phone + '; email: ' + email + '; password: ' + password + '; termsOfService: ' + tosAgreement);
  if(firstName && lastName && phone && email && password && tosAgreement){
    // Insure the user doesn't already exist
    _data.read('users', phone, function(err, data){
      if(err){
        // err means phone not in system, which is good here, so go on with ...
        // Hash the password
        var hashedPassword = helpers.hash(password);
        //Create the user object
        if(hashedPassword){
          var userObject = {
            'firstName': firstName,
            'lastName': lastName,
            'phone': phone,
            'email': email,
            'hashedPassword': hashedPassword,
            'tosAgreement': true
          };
          // Store the user
          _data.create('users', phone, userObject, function(err){
            if(!err){
              callback(200);
            } else {
              callback(500, {'Error': 'Could not create the new user.'});
            }
          });
        } else {
          callback(500, {'Error': 'Could not hash the user\'s password.'});
        }

      } else {
        // No err means user with this phone number already exists, which is bad
        callback(400, {'Error': 'A user with this phone number already exists.'});
      }
    });
  } else {
    // Oops, missing fields encountered
    callback(400, {'Error': 'Missing required fields in _users.post.'});
  }

};

// Users - get subhandler
// Required data: phone
// Optional data: none
handlers._users.get = function(data, callback){
  // Check that the phone number is valid
  var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 10 ? data.queryStringObject.phone.trim() : false;
  if(phone){
    // Get the token from the headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, function(tokenIsValid){
      if(tokenIsValid){
        // Lookup the user
        _data.read('users', phone, function(err, data){
          if(!err && data){
            // Remove the hashed password from the user object before returing it to the requester
            delete data.hashedPassword;
            callback(200, data);
          } else {
            callback(404, {'Error': 'Not found, phone number.'});
          }
        });
      } else {
        callback(403, {'Error': 'Missing required token in header, or token is invalid.'})
      }
    });
  } else {
    callback(400, {'Error': 'Missing required phone number field.'})
  }
};

// Users - put subhandler
// Required data: phone
// Optional data: firstname, lastname, password, tosAgreement
handlers._users.put = function(data, callback){
  // Check for the required field
  var phone = typeof(data.payload.phone) == 'string'  && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;

  // Check for the optional fields
  var firstName = typeof(data.payload.firstName) == 'string'  && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  var lastName = typeof(data.payload.lastName) == 'string'  && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  var email = typeof(data.payload.email) == 'string'  && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
  var password = typeof(data.payload.password) == 'string'  && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  // Error if the phone is invalid
  if(phone){
    // Error if nothing is sent to Update
    if(firstName || lastName || email || password){
      // Get the token from the headers
      var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
      // Verify that the given token is valid for the phone number
      handlers._tokens.verifyToken(token, phone, function(tokenIsValid){
        if(tokenIsValid){
          // Lookup the user
          _data.read('users', phone, function(err, userData){
            if(!err && userData){
              // Update the fields necessary
              if(firstName){
                userData.firstName = firstName;
              }
              if(lastName){
                userData.lastName = lastName;
              }
              if(email){
                userData.email = email;
              }
              if(password){
                userData.hashedPassword = helpers.hash(password);
              }
              // Store the newly updated fields
              _data.update('users', phone, userData,function(err){
                if(!err){
                  callback(200);
                } else {
                  callback(500,{'Error' : 'Could not update the user.'});
                }
              });
            } else {
              callback(400,{'Error' : 'Specified user does not exist.'});
            }
          });
        } else {
          callback(403,{"Error" : "Missing required token in header, or token is invalid."});
        }
      });
    } else {
      callback(400,{'Error' : 'Missing fields to update.'});
    }
  } else {
    callback(400,{'Error' : 'Missing required field.'});
  }
};

// Users - delete subhandler
// Required data: phone
// Cleanup old rules associated with the user
handlers._users.delete = function(data, callback){
  // Check that the phone number is valid
  var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 10 ? data.queryStringObject.phone.trim() : false;
  if(phone){
    // Get the token from the headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, function(tokenIsValid){
      if(tokenIsValid){
        // Lookup the user
        _data.read('users', phone, function(err, userData){
          if(!err && data){
            _data.delete('users', phone, function(err){
              if(!err){
                // Delete each of the rules associated with the user
                var userRules = typeof(userData.rules) == 'object' && userData.rules instanceof Array ? userData.rules : [];
                var rulesToDelete = userRules.length;
                if(rulesToDelete > 0){
                  var rulesDeleted = 0;
                  var deletionErrors = false;
                  // Loop thru the rules
                  userRules.forEach(function(ruleId){
                    // Delete the rule
                    _data.delete('rules', ruleId, function(err){
                      if(err){
                        deletionErrors = true;
                      }
                      rulesDeleted++;
                      if(rulesDeleted == rulesToDelete){
                        if(!deletionErrors){
                          callback(200);
                        } else {
                          callback(500, {'Error': 'Errors encountered while attempting to delete all of the user\'s rules. All rules may not have been deleted from the system successfully.'});
                        }
                      }
                    });
                  });
                } else {
                  callback(200);
                }
              } else {
                callback(500, {'Error': 'Could not delete the specified user.'});
              }
            });
          } else {
            callback(400, {'Error': 'Could not find the specified user.'});
          }
        });
      } else {
        callback(403, {'Error': 'Missing required token in header, or token is invalid.'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required phone number field.'});
  }
};

// Tokens handlers
handlers.tokens = function(data, callback){
  // Figure out what method is requested and pass it along to subhandlers
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405);  // 405 is http status code for method not allowed
  }
};

// Container for the tokens subhandlers/methods
handlers._tokens = {};

//Tokens - post
// Required data: phone, password
// Optional data: none
handlers._tokens.post = function(data, callback){
  // Check that all required fields are valid
  var phone = typeof(data.payload.phone) == 'string'  && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;
  var password = typeof(data.payload.password) == 'string'  && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  if(phone && password){
    // Lookup the user that matches that phone number
    _data.read('users', phone, function(err, userData){
      if(!err && userData){
        // Hash the sent password, and compare it to the password stored in the user Object
        var hashedPassword = helpers.hash(password);
        if(hashedPassword == userData.hashedPassword){
          // If valid, create a new token with a random name.  Set expiration date 1 hour
          var tokenId = helpers.createRandomString(20);
          var expires = Date.now() + 1000 * 60 * 60;
          var tokenObject = {
            'phone': phone,
            'id': tokenId,
            'expires': expires
          };

          // Store the token
          _data.create('tokens', tokenId, tokenObject, function(err){
            if(!err){
              callback(200, tokenObject);
            } else {
              callback(500, {'Error': 'Could not create the new token.'});
            }
          });
        } else {
          callback(400, {'Error': 'Password did not match the specified user\'s stored password.'});
        }
      } else {
        callback(400, {'Error': 'Could not find the specifed user.'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields in _tokens.post.'});
  }
};

//Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = function(data, callback){
  // Check that the id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if(id){
    // Lookup the token
    _data.read('tokens', id, function(err, tokenData){
      if(!err && tokenData){
        callback(200, tokenData);
      } else {
        callback(404, {'Error': 'Not found, id.'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required id field, or field invalid.'})
  }
};

//Tokens - put
// Required data: id, extend (this is a bool that effectivly resets the expires)
// Optional data: none
handlers._tokens.put = function(data, callback){
  // Check that the id is valid
  var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;
  var extend = typeof(data.payload.extend) == 'boolean' && data.payload.extend == true ? true : false;
  if(id && extend){
    // Lookup the token
    _data.read('tokens', id, function(err, tokenData){
      if(!err && tokenData){
        // Check to see if the token isn't already expired
        if(tokenData.expires > Date.now()){
          // Set the expiration time to an hour from now
          tokenData.expires = Date.now() * 1000 * 60 * 60;

          // Store the new updated token expiration
          _data.update('tokens', id, tokenData, function(err){
            if(!err){
              callback(200);
            } else {
              callback(500, {'Error': 'Could not update the token\'s expiration.'});
            }
          });
        } else {
          callback(400, {'Error': 'The token has already expired and can\'t be extended.'});
        }
      } else {
        callback(400, {'Error': 'Specified token does not exist.'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields(s), of field(s) are invalid.'});
  }
};

//Tokens - delete
// Required data: id
// Optional data: none
handlers._tokens.delete = function(data, callback){
  // Check that the id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if(id){
    // Lookup the token
    _data.read('tokens', id, function(err, tokenData){
      if(!err && tokenData){
        _data.delete('tokens', id, function(err){
          if(!err){
          callback(200);
          } else {
            callback(500, {'Error': 'Could not delete the specified token.'});
          }
        });
      } else {
        callback(400, {'Error': 'Could not find the specified token.'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required token field.'});
  }
};

// Helper function to verify if a given token id is currently valid for a given user
handlers._tokens.verifyToken = function(id, phone, callback){
  // lookup the token
  _data.read('tokens', id, function(err, tokenData){
    if(!err && tokenData){
      if(tokenData.phone == phone && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// rules
handlers.rules = function(data, callback){
  // Figure out what method is requested and pass it along to subhandlers
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._rules[data.method](data, callback);
  } else {
    callback(405);  // 405 is http status code for method not allowed
  }
};

// Container for the rules subhandlers/methods
handlers._rules = {};

//rules - post (for use with Creating Rules)
// Required data: email, address, phone, ruleTypes
// Optional data: none
handlers._rules.post = function(data, callback){
  // Check that the inputs are valid
  var email = typeof(data.payload.email) == 'string' && data.payload.email.trim().length > 0 ? data.payload.email : false;
  var address = typeof(data.payload.address) == 'string' && data.payload.address.trim().length > 0 ? data.payload.address : false;
  var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length > 0 ? data.payload.phone.trim() : false;
  var ruleTypes = typeof(data.payload.ruleTypes) == 'object' && data.payload.ruleTypes instanceof Array && data.payload.ruleTypes.length > 0 ? data.payload.ruleTypes : false;
  //console.log("D E B U G --> handlers.js line 786 email, address, phone and ruleTypes are: " + email + address + phone + ruleTypes);
  // By the way, % 1 === 0, is how you specify a number is a 'whole number'!
  if(email && address && phone && ruleTypes) {
    // Get the token from the headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

    // Lookup the user phone by reading the token
    _data.read('tokens', token, function(err, tokenData){
      if(!err && tokenData){
        var phone = tokenData.phone;

        // Lookup the user data
        _data.read('users', phone, function(err, userData){
          if(!err && userData){
            var userRules = typeof(userData.rules) == 'object' && userData.rules instanceof Array ? userData.rules : [];

            // Verify that the user has less than the number of max-rules-per-user
            if(userRules.length < config.maxRules){
              // Create a random id for the rule
              var ruleId = helpers.createRandomString(20);

              //Create the rule object, and include the user's phone
              var ruleObject = {
                'id': ruleId,
                'email': email,
                'phone': phone,
                'address': address,
                'ruleTypes': ruleTypes
              };

              // Save the object
                _data.create('rules', ruleId, ruleObject, function(err){
                  if(!err){
                    // Add the ruleId to the user's object
                    userData.rules = userRules;
                    userData.rules.push(ruleId);

                    // Save the new user data
                    _data.update('users', phone, userData, function(err){
                      if(!err){
                        // Return the data about the new rule
                        callback(200, ruleObject);
                      } else {
                        callback(500, {'Error' : 'Could not update the user with the new rule.'});
                      }
                    });

                  } else {
                    callback(500, {'Error': 'Could not create the new rule.'});
                  }
                });
            } else {
              callback(400, {'Error': 'The user already has the maximun number of rules (' + config.maxRules + ').'});
            }
          } else {
            callback(403);
          }
        });
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, {'Error': 'Missing required rule inputs, or inputs are invalid.'});
  }
};

// Rules - get subhandler
// Required data: id
// Optional data: none
handlers._rules.get = function(data, callback){
  // Check that the id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if(id){
    // Lookup the rule
    _data.read('rules', id, function(err, ruleData){
      if(!err && ruleData){
        // Get the token from the headers
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the given token is valid and belongs to the user that created the rule
        //console.log('D E B U G --> handlers.js line 866 This is the rule data: \n', ruleData);
        handlers._tokens.verifyToken(token, ruleData.phone, function(tokenIsValid){
          if(tokenIsValid){
            // Return the rule data
            //console.log('D E B U G --> handlers.js line 870 tokenIsValid is true.');
            callback(200, ruleData);
          } else {
            //console.log('D E B U G --> handlers.js line 873 tokenIsValid is false.');
            callback(403);
          }
        });
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field, or field is invalid.'});
  }
};

// Rules - put subhandler (for use with handlers.rulesUpdate)
// Required data: id
// Optional data: email, address, phone, ruleTypes
handlers._rules.put = function(data, callback){
  // Check for the required field
  var id = typeof(data.payload.id) == 'string'  && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;
  // Check for optional fields
  var email = typeof(data.payload.email) == 'string' && data.payload.email.trim().length > 0 ? data.payload.email : false;
  var address = typeof(data.payload.address) == 'string' && data.payload.address.trim().length > 0 ? data.payload.address : false;
  var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length > 0 ? data.payload.phone.trim() : false;
  var ruleTypes = typeof(data.payload.ruleTypes) == 'object' && data.payload.ruleTypes instanceof Array && data.payload.ruleTypes.length > 0 ? data.payload.ruleTypes : false;

  // Check that id is valid
  if(id){
    if(email || address || phone || ruleTypes){
      // Lookup the rule
      _data.read('rules', id, function(err, ruleData){
        if(!err && ruleData){
          // Get the token from the headers
          var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
          // Verify that the given token is valid and belongs to the user that created the rule
          //console.log('D E B U G --> handlers.js line 907 This is the rule data: \n', ruleData);
          handlers._tokens.verifyToken(token, ruleData.phone, function(tokenIsValid){
            if(tokenIsValid){
              // Update the rule where necessary
              if(email){
                ruleData.email = email;
              }
              if(address){
                ruleData.address = address;
              }
              if(phone){
                ruleData.phone = phone;
              }
              if(ruleTypes){
                ruleData.ruleTypes = ruleTypes;
              }

              // Store the updates
              _data.update('rules', id, ruleData, function(err){
                if(!err){
                  callback(200);
                } else {
                  callback(500, {'Error': 'Could not update the rule.'});
                }
              });
            } else {
              callback(403);
            }
          });
        } else {
          callback(400, {'Error': 'Rule id does not exist.'});
        }
      });
    } else {
      callback(400, {'Error': 'Missing field(s) to update.'});
    }
  } else {
    callback(400, {'Error': 'Missing required field.'});
  }
};


// Rules - delete subhandler (for use with handlers.rules. Edit)
// Required data: id
// Optional data: none
handlers._rules.delete = function(data, callback){
  // Check that the id number is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if(id){
    // Lookup the rule
    _data.read('rules', id, function(err, ruleData){
      if(!err, ruleData){
        // Get the token from the headers
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the given token is valid for the phone number
        handlers._tokens.verifyToken(token, ruleData.phone, function(tokenIsValid){
          if(handlers.rules){
            //console.log('D E B U G --> handlers.js line 964 handlers.rules is: \n' + handlers.rules);
            // Delete the rule data
            _data.delete('rules', id, function(err){
              if(!err){
                // Lookup the user
                _data.read('users', ruleData.phone, function(err, userData){
                  if(!err){
                    // Determine what the user's rules are
                    var userRules = typeof(userData.rules) == 'object' && userData.rules instanceof Array ? userData.rules : [];

                    // Remove the rule from the user's list of rules
                    var rulePosition = userRules.indexOf(id);
                    if(rulePosition > -1){
                      userRules.splice(rulePosition, 1);
                      // Re-save the user's data
                      userData.rules = userRules;
                      //_data.update('users', ruleData.userPhone, userData, function(err){
                      _data.update('users', ruleData.phone, userData, function(err){
                        if(!err){
                        callback(200);
                        } else {
                          callback(500, {'Error': 'Could not update the user\'s rule data.'});
                        }
                      });
                    } else {
                        callback(500, {'Error': 'Could find the rule on the user\'s object, so could not remove it.'});
                    }
                  } else {
                    callback(500, {'Error': 'Could not find the user who created the rule, so could not remove the rule from the list of rules on the user object.'});
                  }
                });
              } else {
                callback(500, {'Error': 'Could not delete the rule data.'})
              }
            });
          } else {
            callback(403)
          }
        });
      } else {
        callback(400, {'Error': 'The specified rule id does not exist.'})
      }
    });

  } else {
    callback(400, {'Error': 'Missing required id field.'});
  }
};

// Export the module
module.exports = handlers;
