import React, { useState } from "react";
import styles from "./../Kanban.module.css";
import { v4 as uuidv4 } from 'uuid';

const Todo = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    let [todo, setTodo] = useState([])
    let [value, setValue] = useState('');
   
   
    const activateEditMode = () => {
      setEditMode(true);
    }
    const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
    }
    const onStatusChange = (e) =>{
      setStatus(e.currentTarget.value);
    }
    const deleteTodo = (id) => {
      let newTodo = [...todo].filter(item => item.id!==id)
      setTodo(newTodo)
    }

    function saveTodo() {
      setTodo(
        [...todo, {
          id:uuidv4(),
          title:value,
          status:true
        }]
      )
      setValue('')
    }

    return(
        <div className={styles.kanbanColumn}>
            <div className={styles.kanbanColumnTitle}>
                 { !editMode &&
              <div>
              <span onDoubleClick={activateEditMode}>{status || "TODO"}</span> 
              </div>
            }
            { editMode &&
              <div>
                  <input onChange={onStatusChange}
                     autoFocus={true} 
                     onBlur={ deactivateEditMode }
                     value={status} />
              </div>
            }
                </div>
            <div className={styles.kanbanItems}>
                <input value={value} onChange={ (e) => setValue(e.target.value)}  className={styles.itemInput} placeholder="Ввести заголовок для карточки"/>
            </div>
            <div>
                <button onClick={saveTodo} className={styles.addItem} type="button">+ Добавить карточку</button>
            </div>

            <div>
              {
                todo.map( item => (
                  <div className={styles.todo} key={item.id}>
                    <div className={styles.todoTitle}>
                      {item.title}
                      </div>
                    <div className={styles.buttons}>
                      <button className={styles.todoBtn} onClick={() => deleteTodo(item.id)}>Delete</button>
                    </div>
                  </div>
                ))
              }
            </div>
            
            
        </div>
    )
}

export default Todo;