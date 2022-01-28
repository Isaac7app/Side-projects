const tasks = [
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th AT 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th AT 11:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food shoping',
        day: 'Feb 5th AT 2:30pm',
        reminder: false,
    }
]



const Task = () => {
  return( 
  <>
    {tasks.map((task)=>(<h3>{task.text}</h3>))}
  </>
  )
};

export default Task;
