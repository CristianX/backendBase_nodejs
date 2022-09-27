const router = require('express').Router();

router.route('/tasks').get((req, res, next) => {
  res.json({
    message: 'obtener todos los tasks',
  });
});

module.exports = router;
