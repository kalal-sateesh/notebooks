/* eslint-disable react/prop-types */
import styles from "../Book/Book.module.css";
const Book = ({ title, handleEdit, index, handleDelete, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Title : {title}</div>
      <div className={styles.description}>Description : {description}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.editButton} onClick={() => handleEdit(index)}>
          EDIT
        </button>
        <button
          className={styles.deletetButton}
          onClick={() => handleDelete(index)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Book;
