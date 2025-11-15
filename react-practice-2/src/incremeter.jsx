
function Incrementer({ text, count, onIncrement, onDecrement }) {  
    return(
        <>
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={onDecrement}>-</button>
            <h2>{text}: {count}</h2>
            <button onClick={onIncrement}>+</button>
        </span>
       
        </>
    );
}

export default Incrementer;