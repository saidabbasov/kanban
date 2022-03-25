import React from "react";
import styles from "./Kanban.module.css";
import Todo from "./Todo/Todo";

const Kanban = () => {
    return(
        <div className={styles.kanban}>
            <Todo />
        </div>
    )
}

export default Kanban;