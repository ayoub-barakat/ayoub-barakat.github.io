var express = require('express');
var router  = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../bower_components'));
router.use(express.static(__dirname + '/../dist'));
router.use(express.static(__dirname + '/../uploads'));
router.use('/templates', express.static(__dirname + '/../templates'));

router.get('/', function (req, res) {
    res.render('app.html.ejs');
});

router.get('/:route', function (req, res) {
    /*if(req.params.route == 'index')
        res.render('index.html.ejs')
    else*/
        res.render('404.html.ejs');
});

module.exports = router
