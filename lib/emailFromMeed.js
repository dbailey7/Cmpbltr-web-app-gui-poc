/*
 * This is a module to send an email to notify an inquirer that their
 * inquiry has been received!  
 */

var DOMAIN = 'meedpartners.com';
var mailgun = require('mailgun-js')({
  apiKey: "6e60f90776ba92b584bff8ed0ae70d6e-060550c6-6c98a653",
  domain: DOMAIN
});

var data = {
  to: 'david.bailey@meedpartners.com',
  from: 'The Compobulator <sandbox2346789@mailgun.org>',
  subject: 'Meet the Compobulator!',
  text: 'Your message has been received and we will contact you soon!'
};

mailgun.messages().send(data, function (error, body) {
  if(!error, body){
    console.log('Hooray! Email was sent successfully!', data.text);
  } else {
    console.log('Oops: email message send failed; error was: ', error);
  }
});
