import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import { useDispatch } from 'react-redux';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const hanldeIncreaseClick = ()=>{
        const action = increase(5); // action creator
        console.log(action);
        dispatch(action);
    }
    const hanldeDecreaseClick = ()=>{
        const action = decrease(); // action creator
        console.log(action);
        dispatch(action);
    }
    return (
        <div>
            <button onClick={hanldeIncreaseClick}>Increase</button>
            <button onClick={hanldeDecreaseClick}>Decrease</button>
            Counter {counter}
            <p>hihi</p>
            
        </div>
    );
}

export default CounterFeature;