function Block({ title , answer, isSelected, onClick }) {
  const style = {
    width: "120px",
    height: "120px",
    background: isSelected ? "#4CAF50" : "#e0e0e0",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    margin: "10px",
    cursor: "pointer"
  };

  return <div style={style} onClick={onClick} >{isSelected ? answer : title}</div>;
}

export default Block;