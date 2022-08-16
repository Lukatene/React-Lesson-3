import ToDoList from "./TodoList"

function Todo ({maintitle, Clearall}) {
    return (
        <div className='main'>
         <div className='wrapper'>
           <h1 className="h1">{maintitle}</h1>
           <button onClick={Clearall} className="ClearallButton">CLear All</button>
           <div className='line'></div>
           
         </div>
         <ToDoList/>
        </div>
    )
    
    
}






export default Todo;