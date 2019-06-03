import React from 'react';
import './App.css';
import axios from 'axios';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      error: '',
      errorMSG: 'You got some constructor error ;(  ...',

    }
  }

  componentDidMount() {
    console.log("CDM active");
    axios
      .get('http://localhost:4010/posts')
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data});
      })
      .catch(err => {
        console.log("YOU got an ERROR!", err);
        this.setState({error: err});
      })
  }


render() {

  console.log(this.state.posts);
  return (
    <div className="App">
      <h4>Something</h4>
      {this.state.posts.map( (postItem, index) => (
        <div
          key = {postItem}        
        >  POST: {postItem.text} </div>       
      ))}  

    </div>
  );

  }
 
}

export default App;

/*
  {this.state.posts.map( (postItem, index) => (
        <div
          key = {postItem}
        
        >  {postItem} </div>
        
      ))}  

*/