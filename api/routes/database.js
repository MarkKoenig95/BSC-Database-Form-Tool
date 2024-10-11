const express = require("express");
const {
  getBibleBookInfo,
  getVerseInfo,
  setWeeklyReadingOrder,
} = require("../logic/database");
const router = express.Router();

router.route("/bible-books").get((req, res) => {
  getBibleBookInfo((result) => {
    res.send(result);
  });
});

router.route("/verse-info").get((req, res) => {
  let { query } = req;
  let { bookID, chapter, verse } = query;
  getVerseInfo(bookID, chapter, verse, (result) => {
    if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.sendStatus(404);
    }
  });
});

router.route("/weekly-reading").post((req, res) => {
  let { query } = req;
  let { startVerseID, endVerseID, value } = query;

  setWeeklyReadingOrder(startVerseID, endVerseID, value, (error) => {
    if (!error) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });
});

module.exports = router;
