import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './Components/Comments';

function App() {
  const [comments, setComments] = useState([
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
  ])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
  .then(response => response.json())
  .then(result => setComments(result))
  .then(json => console.log('componentDidMount', json))
}, [comments])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {comments.map((comments, index) =>{
        return <Comments 
        key={index} 
        index={index}
        comments={comments}
        />
      })}
    </div>
  );
}

export default App;
