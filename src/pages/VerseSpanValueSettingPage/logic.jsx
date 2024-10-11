import Axios from "axios";
import { getVerseID } from "../../logic/getters";

export async function setVerseSpanValues(
  startBookID,
  startChapter,
  startVerse,
  endBookID,
  endChapter,
  endVerse,
  value,
  type,
  successCB,
  errorCB
) {
  let startVerseID = await getVerseID(startBookID, startChapter, startVerse);
  let endVerseID = await getVerseID(endBookID, endChapter, endVerse);

  Axios.post(
    `/api/database/${type}?startVerseID=${startVerseID}&endVerseID=${
      endVerseID - 1
    }&value=${value}`
  )
    .then((res) => {
      console.log("res", res);
      successCB();
    })
    .catch((err) => {
      console.log("err", err);
      errorCB();
    });
}
