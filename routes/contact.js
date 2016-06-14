var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')('Kahagalle', 'Nayomi@1122');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {

  sendgrid.send({
    to:       'nayomilive@gmail.com',
    from:     'Codex@cnsytex.com',
    subject:  'User Message',
    text: 'You have a new message with following details...\n\n\nName: '+req.body.name+ '\n\nEmail: '+req.body.email+'\n\nMessage: '+req.body.message
  }, function(err, json) {
    if (err) {
      console.log(err);
      res.redirect('/contact');
    }
    else{
      console.log('Message Sent: '+json.response);
      res.redirect('/');
    }
  });

});
module.exports = router;
