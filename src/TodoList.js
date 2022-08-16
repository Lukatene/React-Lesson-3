import { useState } from "react";



const arr0fList = [
    { id:1, name : "React Lesson #1"},
    { id:2, name : "React Lesson #2"},
    { id:3, name : "React Lesson #3"},
    { id:4, name : "React Lesson #4"},
    { id:5, name : "React Lesson #5"}
];

function ToDoList() {
  const [items, setItems] = useState(arr0fList);

  const deleteItem = (index) => () =>
    setItems((items) => items.filter((_, i) => i !== index));

  return (
    <>
      {items.map((it, index) => {
        return (
          <div className="todolistdiv" key={it.id}>
            <div className="names">{it.name}</div>
             <button className="deletebutton" onClick={deleteItem(index)}>Done</button>
          </div>
        );
      })}
    </>
  );
}

export default  ToDoList;