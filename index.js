var md5 = require('md5');
var bot = require('telegram-node-bot')('telegramtoken');
bot.router
  .when(['/hash'], 'hash')
bot.controller('hash', function(x){
  console.log(x.message.text);
  var phone = x.message.text.split(' ')[1];
  var random = x.message.text.split(' ')[2];
  x.sendMessage(md5(phone+random));
})
