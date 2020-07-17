import React, { Component } from 'react';



class Window extends Component {
    
    state = {
        loading: true,
        picture: null
    }
    
    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/photos";
        const response = await fetch(url);
        const data = await response.json();
        let randomData = data[Math.floor(Math.random()* data.length)];
        this.setState({picture: randomData, loading: false});
        console.log(randomData);
                
    }

   
  
   render(){
       if (this.state.loading){
           return <div>loading...</div>
       }

       if (!this.state.picture){
           return <div>didn't get a picture.</div>
       }

       return (
           <div>
              <div>
                <div>{this.state.picture.albumId}</div>
                <div>{this.state.picture.title}</div>
                <div>{this.state.picture.url}</div>
                <img src={this.state.picture.thumbnailUrl}/>
              </div>
           </div>
       )
   }
}
export default Window;
