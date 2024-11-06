export default function Deletebutton({task,tasks,setTasks}){
    function handelDelete(task){
        setTasks(tasks.filter((item)=> item!==task))
    }
    return(
        <button className="deletebutton" onClick={()=>handelDelete(task)}>❌</button>
    )
}