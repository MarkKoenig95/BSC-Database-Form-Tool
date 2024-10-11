import Axios from "axios";

export async function getBibleBooks() {
  let { data } = await Axios.get("/api/database/bible-books");
  data.unshift({ BibleBookID: 0, BookName: "" });
  return data;
}

export async function getVerseID(bookID, chapter, verse) {
  let { data } = await Axios.get(
    `api/database/verse-info?bookID=${bookID}&chapter=${chapter}&verse=${verse}`
  );

  return data.VerseID;
}
