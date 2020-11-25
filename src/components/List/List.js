import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../../actions';

const List = (props) => {
    return (
        <div className="list_container my-3">
          
            {props.todos.map((todo, index)=>(
                <ul className="row mx-5 align-items-center" key={index}> 
               <li className="col"> <h4>{todo.message} </h4> </li>
                <button className="btn btn-danger m-2" onClick={()=> props.dispatch(deleteTodo(todo.id))}>Delete</button>
               
                </ul>
            ))}
            
        </div>
    );
};

const mapStateToProps = (state) =>({
    todos: state.todos.data,
});


export default connect(mapStateToProps)(List);
