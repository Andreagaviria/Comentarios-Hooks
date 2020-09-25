import React, {useState, addValue} from 'react';

const AddComment = () => {
    const [ valueBody, setValueBody] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
if(!valueBody) return;
addValue(valueBody) 
setValueBody('');
}
return(
    <form onSubmit={handleSubmit}>
    <input type="text" 
    name="body" 
    placeholder="Add Comment"
    onChange={e=> setValueBody(e.target.value)}
    setValueBody={valueBody}
    />
    </form>
)
}

export default AddComment;