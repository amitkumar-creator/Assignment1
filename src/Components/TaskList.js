import React from 'react';


const TaskList = (props)=>{
    
        return(
            props.taskList.map((val,idx) =>{
                let ThingsToDo=`ThingsTodo-${idx}`, Owner=`Owner-${idx}`, Status=`Status-${idx}`, DueDate =`DueDate-${idx}`,Priority=`Priority-${idx}`
                return(
                 <tr key={val.index}>
                    <td>
                        <input type="text" required name="ThingsToDo" data-id={idx} id={ThingsToDo}  className="form-control" />
                    </td>
                    <td>
                        <input type="text" required name="Owner" data-id={idx} id={Owner}  className="form-control" />
                    </td>
                    <td>
                        <input type="text" required name="Status" data-id={idx} id={Status}  className="form-control" />
                    </td>
                    <td>
                        <input type="text" required name="DueDate" data-id={idx} id={DueDate}  className="form-control" />
                    </td>
                    <td>
                        <input type="text" required name="Priority" data-id={idx} id={Priority}  className="form-control" />
                    </td>
                    <td>
                        {
                            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                            :<button className="btn btn-danger" onClick={(()=>props.delete(val))}><i className="fa fa-minus-circle" aria-hidden="true"></i></button>
                        }
                    </td>
                </tr>
                )
            })
        );
    }


export default TaskList;