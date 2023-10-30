import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [increamentAmount, setIncrementAmount] = useState(0);

    const addValue = Number(increamentAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section style={{display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', width:'100vw', height:'100vh'}}>

            <p style={{fontSize:'30px'}}>{count}</p>

            <div style={{display:'flex', alignItems:'center', gap:'20px', fontSize:'20px'}}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type='text'
                value={increamentAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
                style={{margin:'50px', border:'none', fontSize:'30px', textAlign:'center'}} />

            <div style={{fontSize:'20px'}}>
                <button onClick={() => dispatch(incrementByAmount(addValue))}
                style={{margin:'30px'}}>Add Amount</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </section>
    )
}

export default Counter