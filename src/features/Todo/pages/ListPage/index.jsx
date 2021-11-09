import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';
import TodoForm from '../../components/TodoForm';

function ListPage(props) {
    const initTodoList = [
        {
            id : 1,
            title : 'eat',
            status : 'new new   ',
        },
        {
            id : 2,
            title : 'sleep',
            status : 'completed',
        },
        {
            id : 3,
            title : 'code',
            status : 'new new',
        },
    ]
    const location = useLocation();

    const history = useHistory();
    const match = useRouteMatch();
    const params = queryString.parse(location.search);
    useEffect(()=>{
        const params = queryString.parse(location.search);
        SetFilterStatus(params.status || 'all');
    },[location.search]);

    const [todoList,SetTodoList ] = useState(initTodoList);
    const [filterStatus,SetFilterStatus] = useState(()=>{
        const params = queryString.parse(location.search);
        //  console.log(params.status);
        return params.status || 'all';
    });
    const handleTodoClick = (todo , idx) =>{
        const newTodoList = [...todoList];
         newTodoList[idx] = {
            ...newTodoList[idx],
            status : newTodoList[idx].status === 'new new' ? 'completed' : 'new new',
        };
        console.log(newTodoList[idx]);
        SetTodoList(newTodoList);
    }
    const handleShowAllClick = ()=>{
        const queryParams = {status : 'all'};
        history.push({
            pathname : match.path,
            search : queryString.stringify(queryParams)
        });
    }
    const handleShowCompletedClick = ()=>{
        const queryParams = {status : 'completed'};
        history.push({
            pathname : match.path,
            search : queryString.stringify(queryParams)
        });
    }
    const handleShowNewClick = ()=>{
        const queryParams = {status : 'new new'};
        history.push({
            pathname : match.path,
            search : queryString.stringify(queryParams)
        });
    }

    const renderTodoList = todoList.filter(todo =>filterStatus==='all' || filterStatus === todo.status);
    // console.log(renderTodoList);
    const counter = useSelector(state => state.counter);
    const handleTodoFormSubmit = (values) =>{
        console.log('hihi');
        const newTodo = {
            id : todoList.length+2,
            title : values.title,
            status : " completed",
        }
        const newTodoList = [...todoList, newTodo];
        SetTodoList(newTodoList);
    }
    return (
        <div>

            <h3>Todo form</h3>
            <div className="container">            <TodoForm onSubmit={handleTodoFormSubmit}/></div>

            <h3>TodoList</h3>
            <span>{counter} nè</span>
            <TodoList todoList={renderTodoList} onTodoClick = {handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Complete</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;