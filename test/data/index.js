// main
exports.index = function (req, res) {
    return res.render('index', { user : req.user });
};

exports.register = function(req, res) {
    return res.render('register', { });
};

exports.login = function(req, res) {
    return res.render('login', { user : req.user});
};

exports.logout = function(req, res, next) {
    return res.render('index', {});
};

exports.c = function(req, res, next) {
    res.render('ch');
};

// challenges
exports.c1 = function(req, res, next) {
    res.render('ch/ch1', { no: '1', next: '2', type:'HTML' });
};
exports.c2 = function(req, res, next) {
    res.render('ch/ch2', { no: '2', next: '3', type:'HTML' });
};
exports.c3 = function(req, res, next) {
    res.render('ch/ch3', { no: '3', next: '4', type:'HTML' });
};
exports.c4 = function(req, res, next) {
    res.render('ch/ch4', { no: '4', next: '5', type:'HTML' });
};
exports.c5 = function(req, res, next) {
    res.render('ch/ch5', { no: '5', next: '6', type:'HTML' });
};
exports.c6 = function(req, res, next) {
    res.render('ch/ch6', { no: '6', next: '7', type:'HTML' });
};
exports.c7 = function(req, res, next) {
    res.render('ch/ch7', { no: '7', next: '8', type:'HTML' });
};
exports.c8 = function(req, res, next) {
    res.render('ch/ch8', { no: '8', next: '9', type:'CSS' });
};
exports.c9 = function(req, res, next) {
    res.render('ch/ch9', { no: '9', next: '10', type:'CSS' });
};
exports.c10 = function(req, res, next) {
    res.render('ch/ch10', { no: '10', next: '11', type:'CSS' });
};
exports.c11 = function(req, res, next) {
    res.render('ch/ch11', { no: '11', next: '12', type:'CSS' });
};
exports.c12 = function(req, res, next) {
    res.render('ch/ch12', { no: '12', next: '13', type:'CSS' });
};
exports.c13 = function(req, res, next) {
    res.render('ch/ch13', { no: '13', next: '14', type:'CSS' });
};
exports.c14 = function(req, res, next) {
    res.render('ch/ch14', { no: '14', next: '15', type:'CSS' });
};
exports.c15 = function(req, res, next) {
    res.render('ch/ch15', { no: '15', next: '16', type:'CSS' });
};
exports.c16 = function(req, res, next) {
    res.render('ch/ch16', { no: '16', next: '17', type:'CSS' });
};
exports.c17 = function(req, res, next) {
    res.render('ch/ch17', { no: '17', next: '18', type:'CSS' });
};
exports.c18 = function(req, res, next) {
    res.render('ch/ch18', { no: '18', next: '19', type:'CSS' });
};
exports.c19 = function(req, res, next) {
    res.render('ch/ch19', { no: '19', next: '20', type:'CSS' });
};
exports.c20 = function(req, res, next) {
    res.render('ch/ch20', { no: '20', next: '21', type:'CSS' });
};
exports.c21 = function(req, res, next) {
    res.render('ch/ch21', { no: '21', next: '22', type:'CSS' });
};
exports.c22 = function(req, res, next) {
    res.render('ch/ch22', { no: '22', next: '23', type:'CSS' });
};
exports.c23 = function(req, res, next) {
    res.render('ch/ch23', { no: '23', next: '24', type:'CSS' });
};
exports.c24 = function(req, res, next) {
    res.render('ch/ch24', { no: '24', next: '25', type:'CSS' });
};
exports.c25 = function(req, res, next) {
    res.render('ch/ch25', { no: '25', next: '26', type:'CSS' });
};
exports.c26 = function(req, res, next) {
    res.render('ch/ch26', { no: '26', next: '27', type:'CSS' });
};
exports.c27 = function(req, res, next) {
    res.render('ch/ch27', { no: '27', next: '28', type:'CSS' });
};
exports.c28 = function(req, res, next) {
    res.render('ch/ch28', { no: '28', next: '29', type:'CSS' });
};
exports.c29 = function(req, res, next) {
    res.render('ch/ch29', { no: '29', next: '30', type:'CSS' });
};
exports.c30 = function(req, res, next) {
    res.render('ch/ch30', { no: '30', next: '31', type:'CSS' });
};


