const DB = require('./../models');
const PASSPORT = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports.initAPI = function(APP) {
  PASSPORT.use(new LocalStrategy(
    function(username, password, done) {
      DB.User.findOne({where: {username: username}}).then(function(user) {
        if (!user) {
          return done(null, false);
        }
        if (user.password !== password) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  ));

  PASSPORT.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  PASSPORT.deserializeUser(function(id, cb) {
    DB.User.findById(id).then(function(user) {
      cb(null, user);
    }).catch(function(err) {
      cb(err);
    });
  });

  APP.use(PASSPORT.initialize());
  APP.use(PASSPORT.session());

  APP.get('/api/login', function(req, res) {
    let username = '';
    if (req.user) {
      username = req.user.username;
    }
    res.send({loggedIn: req.isAuthenticated(), username: username});
  });

  APP.post('/api/login', function(req, res, next) {
    PASSPORT.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send({ success : false, message : 'Felaktigt användarnamn eller lösenord' });
      }
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.send({ success : true, message : '' });
      });
    })(req, res, next);
  });

  APP.delete('/api/login', function(req, res) {
    req.logout();
    res.end();
  });
};
