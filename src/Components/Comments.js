import React from 'react';

const Comments = ({index, comments}) => {
    console.log('lulo', comments)
return <div>{comments.body}</div>
}

export default Comments;
