var md5 = require('md5');
var bot = require('telegram-node-bot')('telegram token');
bot.router
  .when(['/token'], 'token')
bot.controller('token', function(x){
  console.log(x.message.text);
  var phone = x.message.text.split(' ')[1];
  var random = x.message.text.split(' ')[2];
  var string = phone.toString() + random.toString();
  console.log(string);
  x.sendMessage(md5(string));
})
