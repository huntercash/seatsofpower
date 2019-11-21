const sql = require('../connection/mysql');

exports.sopsearch = (req, res) => {
  const stars = req.params.stars;
  if (stars) {
    sql.query(
      `SELECT sop.name, sop.region, sop.stars, sop.reinforcements, sop.lockable, sop.coordinates FROM sop WHERE sop.stars = ${req.params.stars}`,
      function(error, result) {
        if (error) res.status(400).json({ error: error });
        return res.status(200).json(result);
      }
    );
  } else {
    sql.query(
      `SELECT sop.name, sop.region, sop.stars, sop.reinforcements, sop.lockable, sop.coordinates FROM sop`,
      function(error, result) {
        if (error) res.status(400).json({ error: error });
        return res.status(200).json(result);
      }
    );
  }
};
