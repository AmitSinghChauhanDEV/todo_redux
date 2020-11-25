import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../../actions/index'
import {updateTodo} from '../../actions/index'

const AddTodo = (props) => {
    return (

        <form onSubmit={(event)=>{
            event.preventDefault()
            let input = event.target.userInput.value;
            //console.log(input);
            props.dispatch(addTodo(input));
            props.dispatch(updateTodo(input));

            
            event.target.userInput.value = ""; 
        }}>
        <div className="row m-2">        

            <input type="text"  className="col form-control" name='userInput' />
            <button type="submit" className="btn btn-primary mx-2"> Add</button>
        </div>
        </form>
        

    )
}

export default connect()(AddTodo); 
