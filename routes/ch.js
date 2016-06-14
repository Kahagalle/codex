var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ch');
});

router.get('/1', function(req, res, next) {
  res.render('ch/html_css/ch1', { no: '1', next: '2', type:'HTML' });
});

router.get('/2', function(req, res, next) {
  res.render('ch/html_css/ch2', { no: '2', next: '3', type:'HTML' });
});

router.get('/3', function(req, res, next) {
  res.render('ch/html_css/ch3', { no: '3', next: '4', type:'HTML' });
});

router.get('/4', function(req, res, next) {
  res.render('ch/html_css/ch4', { no: '4', next: '5', type:'HTML' });
});

router.get('/5', function(req, res, next) {
  res.render('ch/html_css/ch5', { no: '5', next: '6', type:'HTML' });
});

router.get('/6', function(req, res, next) {
  res.render('ch/html_css/ch6', { no: '6', next: '7', type:'HTML' });
});

router.get('/7', function(req, res, next) {
  res.render('ch/html_css/ch7', { no: '7', next: '8', type:'HTML' });
});

router.get('/8', function(req, res, next) {
  res.render('ch/html_css/ch8', { no: '8', next: '9', type:'CSS' });
});

router.get('/9', function(req, res, next) {
  res.render('ch/html_css/ch9', { no: '9', next: '10', type:'CSS' });
});

router.get('/10', function(req, res, next) {
  res.render('ch/html_css/ch10', { no: '10', next: '11', type:'CSS' });
});

router.get('/11', function(req, res, next) {
  res.render('ch/html_css/ch11', { no: '11', next: '12', type:'CSS' });
});

router.get('/12', function(req, res, next) {
  res.render('ch/html_css/ch12', { no: '12', next: '13', type:'CSS' });
});

router.get('/13', function(req, res, next) {
  res.render('ch/html_css/ch13', { no: '13', next: '14', type:'CSS' });
});

router.get('/14', function(req, res, next) {
  res.render('ch/html_css/ch14', { no: '14', next: '15', type:'CSS' });
});

router.get('/15', function(req, res, next) {
  res.render('ch/html_css/ch15', { no: '15', next: '16', type:'CSS' });
});

router.get('/16', function(req, res, next) {
  res.render('ch/html_css/ch16', { no: '16', next: '17', type:'CSS' });
});

router.get('/17', function(req, res, next) {
  res.render('ch/html_css/ch17', { no: '17', next: '18', type:'CSS' });
});

router.get('/18', function(req, res, next) {
  res.render('ch/html_css/ch18', { no: '18', next: '19', type:'CSS' });
});

router.get('/19', function(req, res, next) {
  res.render('ch/html_css/ch19', { no: '19', next: '20', type:'CSS' });
});

router.get('/20', function(req, res, next) {
  res.render('ch/html_css/ch20', { no: '20', next: '21', type:'CSS' });
});

router.get('/21', function(req, res, next) {
  res.render('ch/html_css/ch21', { no: '21', next: '22', type:'CSS' });
});

router.get('/22', function(req, res, next) {
  res.render('ch/html_css/ch22', { no: '22', next: '23', type:'CSS' });
});

router.get('/23', function(req, res, next) {
  res.render('ch/html_css/ch23', { no: '23', next: '24', type:'CSS' });
});

router.get('/24', function(req, res, next) {
  res.render('ch/html_css/ch24', { no: '24', next: '25', type:'CSS' });
});

router.get('/25', function(req, res, next) {
  res.render('ch/html_css/ch25', { no: '25', next: '26', type:'CSS' });
});

router.get('/26', function(req, res, next) {
  res.render('ch/html_css/ch26', { no: '26', next: '27', type:'CSS' });
});

router.get('/27', function(req, res, next) {
  res.render('ch/html_css/ch27', { no: '27', next: '28', type:'CSS' });
});

router.get('/28', function(req, res, next) {
  res.render('ch/html_css/ch28', { no: '28', next: '29', type:'CSS' });
});

router.get('/29', function(req, res, next) {
  res.render('ch/html_css/ch29', { no: '29', next: '30', type:'CSS' });
});

router.get('/30', function(req, res, next) {
  res.render('ch/html_css/ch30', { no: '30', next: '31', type:'CSS' });
});

router.get('/31', function(req, res, next) {
  res.render('ch/javascript/ch31', { no: '31', next: '32', type:'JavaScript' });
});

router.get('/32', function(req, res, next) {
  res.render('ch/javascript/ch32', { no: '32', next: '33', type:'JavaScript' });
});

router.get('/33', function(req, res, next) {
  res.render('ch/javascript/ch33', { no: '33', next: '34', type:'JavaScript' });
});

router.get('/34', function(req, res, next) {
  res.render('ch/javascript/ch34', { no: '34', next: '35', type:'JavaScript' });
});

router.get('/35', function(req, res, next) {
  res.render('ch/javascript/ch35', { no: '35', next: '36', type:'JavaScript' });
});

router.get('/36', function(req, res, next) {
  res.render('ch/javascript/ch36', { no: '36', next: '37', type:'JavaScript' });
});

router.get('/37', function(req, res, next) {
  res.render('ch/javascript/ch37', { no: '37', next: '38', type:'JavaScript' });
});

router.get('/38', function(req, res, next) {
  res.render('ch/javascript/ch38', { no: '38', next: '39', type:'JavaScript' });
});

router.get('/39', function(req, res, next) {
  res.render('ch/javascript/ch39', { no: '39', next: '40', type:'JavaScript' });
});

router.get('/40', function(req, res, next) {
  res.render('ch/javascript/ch40', { no: '40', next: '41', type:'JavaScript' });
});

router.get('/41', function(req, res, next) {
  res.render('ch/javascript/ch41', { no: '41', next: '42', type:'JavaScript' });
});

router.get('/42', function(req, res, next) {
  res.render('ch/javascript/ch42', { no: '42', next: '43', type:'JavaScript' });
});

router.get('/43', function(req, res, next) {
  res.render('ch/javascript/ch43', { no: '43', next: '44', type:'JavaScript' });
});

router.get('/44', function(req, res, next) {
  res.render('ch/javascript/ch44', { no: '44', next: '45', type:'JavaScript' });
});

router.get('/45', function(req, res, next) {
  res.render('ch/javascript/ch45', { no: '45', next: '46', type:'JavaScript' });
});

router.get('/46', function(req, res, next) {
  res.render('ch/javascript/ch46', { no: '46', next: '47', type:'JavaScript' });
});

router.get('/47', function(req, res, next) {
  res.render('ch/javascript/ch47', { no: '47', next: '48', type:'JavaScript' });
});

router.get('/48', function(req, res, next) {
  res.render('ch/javascript/ch48', { no: '48', next: '49', type:'JavaScript' });
});

router.get('/49', function(req, res, next) {
  res.render('ch/javascript/ch49', { no: '49', next: '50', type:'JavaScript' });
});

router.get('/50', function(req, res, next) {
  res.render('ch/javascript/ch50', { no: '50', next: '51', type:'JavaScript' });
});

router.get('/51', function(req, res, next) {
  res.render('ch/javascript/ch51', { no: '51', next: '52', type:'JavaScript' });
});

router.get('/52', function(req, res, next) {
  res.render('ch/javascript/ch52', { no: '52', next: '53', type:'JavaScript' });
});

router.get('/53', function(req, res, next) {
  res.render('ch/javascript/ch53', { no: '53', next: '54', type:'JavaScript' });
});

router.get('/54', function(req, res, next) {
  res.render('ch/javascript/ch54', { no: '54', next: '55', type:'JavaScript' });
});

router.get('/55', function(req, res, next) {
  res.render('ch/javascript/ch55', { no: '55', next: '56', type:'JavaScript' });
});

router.get('/56', function(req, res, next) {
  res.render('ch/javascript/ch56', { no: '56', next: '57', type:'JavaScript' });
});

router.get('/57', function(req, res, next) {
  res.render('ch/javascript/ch57', { no: '57', next: '58', type:'JavaScript' });
});

router.get('/58', function(req, res, next) {
  res.render('ch/javascript/ch58', { no: '58', next: '59', type:'JavaScript' });
});

router.get('/59', function(req, res, next) {
  res.render('ch/javascript/ch59', { no: '59', next: '60', type:'JavaScript' });
});

router.get('/60', function(req, res, next) {
  res.render('ch/javascript/ch60', { no: '60', next: '61', type:'JavaScript' });
});

router.get('/61', function(req, res, next) {
  res.render('ch/bootstrap/ch61', { no: '61', next: '62', type:'Bootstrap' });
});

router.get('/62', function(req, res, next) {
  res.render('ch/bootstrap/ch62', { no: '62', next: '63', type:'Bootstrap' });
});

router.get('/63', function(req, res, next) {
  res.render('ch/bootstrap/ch63', { no: '63', next: '64', type:'Bootstrap' });
});

router.get('/64', function(req, res, next) {
  res.render('ch/bootstrap/ch64', { no: '64', next: '65', type:'Bootstrap' });
});

router.get('/65', function(req, res, next) {
  res.render('ch/bootstrap/ch65', { no: '65', next: '66', type:'Bootstrap' });
});

router.get('/66', function(req, res, next) {
  res.render('ch/bootstrap/ch66', { no: '66', next: '67', type:'Bootstrap' });
});

router.get('/67', function(req, res, next) {
  res.render('ch/bootstrap/ch67', { no: '67', next: '68', type:'Bootstrap' });
});

router.get('/68', function(req, res, next) {
  res.render('ch/bootstrap/ch68', { no: '68', next: '69', type:'Bootstrap' });
});

router.get('/69', function(req, res, next) {
  res.render('ch/bootstrap/ch69', { no: '69', next: '70', type:'Bootstrap' });
});

router.get('/70', function(req, res, next) {
  res.render('ch/bootstrap/ch70', { no: '70', next: '71', type:'Bootstrap' });
});

router.get('/71', function(req, res, next) {
  res.render('ch/jquery/ch71', { no: '71', next: '72', type:'jQuery' });
});

router.get('/72', function(req, res, next) {
  res.render('ch/jquery/ch72', { no: '72', next: '73', type:'jQuery' });
});

router.get('/73', function(req, res, next) {
  res.render('ch/jquery/ch73', { no: '73', next: '74', type:'jQuery' });
});

router.get('/74', function(req, res, next) {
  res.render('ch/jquery/ch74', { no: '74', next: '75', type:'jQuery' });
});

router.get('/75', function(req, res, next) {
  res.render('ch/jquery/ch75', { no: '75', next: '76', type:'jQuery' });
});

router.get('/76', function(req, res, next) {
  res.render('ch/jquery/ch76', { no: '76', next: '77', type:'jQuery' });
});

router.get('/77', function(req, res, next) {
  res.render('ch/jquery/ch77', { no: '77', next: '78', type:'jQuery' });
});

router.get('/78', function(req, res, next) {
  res.render('ch/jquery/ch78', { no: '78', next: '79', type:'jQuery' });
});

router.get('/79', function(req, res, next) {
  res.render('ch/jquery/ch79', { no: '79', next: '80', type:'jQuery' });
});

router.get('/80', function(req, res, next) {
  res.render('ch/jquery/ch80', { no: '80', next: '81', type:'jQuery' });
});

router.get('/81', function(req, res, next) {
  res.render('ch/jquery/ch81', { no: '81', next: '82', type:'jQuery' });
});

router.get('/82', function(req, res, next) {
  res.render('ch/jquery/ch82', { no: '82', next: '83', type:'jQuery' });
});

router.get('/83', function(req, res, next) {
  res.render('ch/jquery/ch83', { no: '83', next: '84', type:'jQuery' });
});

router.get('/84', function(req, res, next) {
  res.render('ch/jquery/ch84', { no: '84', next: '85', type:'jQuery' });
});

router.get('/85', function(req, res, next) {
  res.render('ch/jquery/ch85', { no: '85', next: '86', type:'jQuery' });
});

router.get('/86', function(req, res, next) {
  res.render('ch/jquery/ch86', { no: '86', next: '87', type:'jQuery' });
});

router.get('/87', function(req, res, next) {
  res.render('ch/jquery/ch87', { no: '87', next: '88', type:'jQuery' });
});

router.get('/88', function(req, res, next) {
  res.render('ch/jquery/ch88', { no: '88', next: '89', type:'jQuery' });
});

router.get('/89', function(req, res, next) {
  res.render('ch/jquery/ch89', { no: '89', next: '90', type:'jQuery' });
});

router.get('/90', function(req, res, next) {
  res.render('ch/jquery/ch90', { no: '90', next: '1', type:'jQuery' });
});
module.exports = router;
