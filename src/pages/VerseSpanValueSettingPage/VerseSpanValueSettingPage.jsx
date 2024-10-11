import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Incrementer from "../../components/Incrementer";
import TypeSelector from "../../components/TypeSelector";
import VerseInput from "../../components/VerseInput";
import { getBibleBooks } from "../../logic/getters";
import Page from "../Page";
import { setVerseSpanValues } from "./logic";

const types = [
  "weekly-reading",
  "memorial-reading-long",
  "memorial-reading-short",
];

export default function WeeklyReadingAddPage(props) {
  console.log("loading weekly reading page");
  const [bibleBooks, setBibleBooks] = useState([
    {},
    { BookName: "Genesis", BibleBookID: 1 },
  ]);

  const [startBookNumber, setStartBookNumber] = useState(1);
  const [startChapter, setStartChapter] = useState(1);
  const [startVerse, setStartVerse] = useState(1);

  const [endBookNumber, setEndBookNumber] = useState(1);
  const [endChapter, setEndChapter] = useState(3);
  const [endVerse, setEndVerse] = useState(1);

  const [value, setValue] = useState(1);
  const [type, setType] = useState(types[0]);

  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertGood, setIsAlertGood] = useState(true);

  let hasAlertMessage = alertMessage && true;

  useEffect(() => {
    getBibleBooks().then(setBibleBooks);
  }, []);

  const _handleSubmitClick = () => {
    let startBook = bibleBooks[startBookNumber];
    let endBook = bibleBooks[endBookNumber];
    const successfulAlertMessage =
      `Successfully set ${startBook.BookName} ${startChapter}:${startVerse} -` +
      ` ${endBook.BookName} ${endChapter}:${endVerse} to have a value of ${value}`;
    const failedAlertMessage = "Something went wrong";

    setVerseSpanValues(
      startBook.BibleBookID,
      startChapter,
      startVerse,
      endBook.BibleBookID,
      endChapter,
      endVerse,
      value,
      type,
      () => {
        setAlertMessage(successfulAlertMessage);
        setIsAlertGood(true);

        setStartBookNumber(endBookNumber);
        setStartChapter(endChapter);
        setStartVerse(endVerse);
        setValue(value + 1);
      },
      () => {
        setAlertMessage(failedAlertMessage);
        setIsAlertGood(false);
      }
    );
  };

  return (
    <Page>
      <TypeSelector title="Type" type={type} types={types} setType={setType} />
      <VerseInput
        bibleBooks={bibleBooks}
        bookNumber={startBookNumber}
        setBookNumber={setStartBookNumber}
        chapter={startChapter}
        setChapter={setStartChapter}
        verse={startVerse}
        setVerse={setStartVerse}
        title="Start Verse"
      />
      <VerseInput
        bibleBooks={bibleBooks}
        bookNumber={endBookNumber}
        setBookNumber={setEndBookNumber}
        chapter={endChapter}
        setChapter={setEndChapter}
        verse={endVerse}
        setVerse={setEndVerse}
        title="End Verse"
      />
      <Incrementer setValue={setValue} title="Value" value={value} />
      <Button className="m-3" onClick={_handleSubmitClick}>
        Submit
      </Button>
      {hasAlertMessage && (
        <Alert className="m-3" variant={isAlertGood ? "success" : "danger"}>
          {alertMessage}
        </Alert>
      )}
    </Page>
  );
}
