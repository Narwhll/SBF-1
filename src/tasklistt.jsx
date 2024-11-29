import "./todolist.css"


function ListofCard({task, date, newTask, newDate}) {
  const deleteTask = (index) => {
      const TaskBaru = task.filter((_, i) => i !== index);
      const DeadlineBaru = date.filter((_, i) => i !== index);
      newTask(TaskBaru);  
      newDate(DeadlineBaru);
  }
  return (
        <div>
          <div class="judul">
            <h2>Your Saved Lists</h2>
          </div>
          <div class="lis">
            <ul class="dua">
              {task.length > 0 ? (
              task.map((tasks, index) => (
                <ul key={index} class="satu">
                  {tasks} 
                  <br></br>
                  Deadline: {date[index]}
                  <button onClick={() => deleteTask(index)}>Mark Complete</button>
                </ul>
              ))
              ) 
              : (
                <p>You do not have any tasks. (Yay!)</p>
              )}
            </ul>
          </div>
        </div>
      );
}
export default ListofCard;