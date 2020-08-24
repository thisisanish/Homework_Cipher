import React from 'react'

const Display = ({tasks,deleteTask,strikeTask}) =>{

    const onDeletePress=(target)=>{
        deleteTask(target)
    }
    const onStrikePress=(target)=>{
        strikeTask(target)
    }


    return (tasks.length===0?  <h3>No Tasks</h3> :tasks.map((element)=>{
        return (
        <div className="card purple accent-4 "key={element.id} style={{padding:'1px', borderRadius:'5px'}}>
            <div className="row ">
                
                    <p className="flow-text"  style={{textOverflow:'ellipsis'}}>
                        {element.crossout===false?element.taskName:<s>{element.taskName}</s>}</p>
              
            </div>
            <div className='row'>
            <p>{element.date}</p>
            <button className="btn yellow accent-4 " onClick={()=>(onDeletePress(element.id))}>Delete</button>
            <button className="btn orange accent-4">Edit</button>
            <button className="btn red accent-4 " onClick={()=>onStrikePress(element.id)}>Strike-Out</button>
            

            </div>
                                 
                    


    
        
        
      </div>)
    })
    
        
        
        
        
    )
}

export default Display
