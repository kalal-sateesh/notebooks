import { useState } from "react";
import Book from "../Book/Book";
import styles from "../Books/Books.module.css";

const Books = () => {
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [books, setBooks] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleAddbook = () => {
    if (!bookName.trim()) {
      setIsError(true);
      setErrorMsg("Book name required*");
      setTimeout(() => {
        setErrorMsg("");
        setIsError(false);
      }, 2000);
      return;
    }
    const newBooks = [...books, { title: bookName, description: description }];
    setBooks(newBooks);
    setBookName("");
    setDescription("");
  };

  const handleEdit = (index) => {
    setBookName(books[index].title);
    setDescription(books[index].description);
    setIndex(index);
    setIsEdit(true);
  };

  const handleSave = () => {
    if (!bookName.trim()) {
      setIsError(true);
      setErrorMsg("Book name should not empty*");
      setTimeout(() => {
        setErrorMsg("");
        setIsError(false);
      }, 2000);
      return;
    }
    const newBooks = [...books];
    newBooks[index].title = bookName;
    newBooks[index].description = description;
    setBooks(newBooks);
    setBookName("");
    setDescription("");
    setIsEdit(false);
  };

  const handleDelete = (ind) => {
    const newBooks = [...books];
    newBooks.splice(ind, 1);
    setBooks(newBooks);
  };

  const list = books.map((ele, index) => {
    return (
      <Book
        key={index}
        title={ele.title}
        index={index}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        description={ele.description}
      />
    );
  });

  return (
    <>
      <div className={styles.inputContainer}>
        <h1 style={{ color: "white" }}>NOTE BOOK</h1>
        <input
          className={styles.input}
          onChange={(e) => setBookName(e.target.value)}
          value={bookName}
          placeholder="Enter title here"
        />
        <div
          style={{ width: "280px", height: "50px" }}
          className={styles.error}
        >
          {isError && (
            <div
              style={{
                color: "rgb(253, 67, 67)",
                textAlign: "start",
                fontWeight: "bold",
              }}
            >
              {errorMsg}
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter description here"
          className={styles.descriptionInput}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br></br>
        {!isEdit ? (
          <button className={styles.addBookButton} onClick={handleAddbook}>
            ADD NOTE
          </button>
        ) : (
          <button className={styles.addBookButton} onClick={handleSave}>
            SAVE
          </button>
        )}
      </div>
      <div className={styles.bookContainer}>{list}</div>
    </>
  );
};

export default Books;
