function Incrementer({ text }) {  
    return(
        <>
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button>-</button>
            <p>{text}</p>
            <button>+</button>
        </span>
       
        </>
    );
}

export default Incrementer;