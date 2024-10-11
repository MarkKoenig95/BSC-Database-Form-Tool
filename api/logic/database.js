const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const bibleDB = new sqlite3.Database(
  path.resolve(__dirname, "../BibleStudyCompanion.db"),
  (err) => {
    if (err) {
      return console.error(err.message);
    } else {
      console.log("Connected to the SQlite database.");
    }
  }
);
module.exports.bibleDB = bibleDB;

function getBibleBookInfo(cb) {
  bibleDB.all(
    "SELECT BibleBookID, BookName FROM tblBibleBooks;",
    [],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        cb(res);
      }
    }
  );
}
module.exports.getBibleBookInfo = getBibleBookInfo;

function getVerseInfo(bookID, chapter, verse, cb) {
  bibleDB.all(
    "SELECT VerseID FROM tblVerseIndex WHERE BibleBook=? AND Chapter=? AND Verse=?;",
    [bookID, chapter, verse],
    (err, res) => {
      if (err) {
        throw err;
      } else {
        cb(res);
      }
    }
  );
}
module.exports.getVerseInfo = getVerseInfo;

function setWeeklyReadingOrder(startVerseID, endVerseID, value, cb) {
  bibleDB.run(
    "UPDATE tblVerseIndex SET WeeklyOrder=? WHERE VerseID BETWEEN ? AND ?;",
    [value, startVerseID, endVerseID],
    (err) => {
      cb(err);
    }
  );
}
module.exports.setWeeklyReadingOrder = setWeeklyReadingOrder;
