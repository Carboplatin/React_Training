import React, { Component } from 'react';

// Your API key is: 95121b77c00d4f83b3d7994d1f8982fc

class Window extends Component {
    
    state = {
        loading: true,
        headlines: []
    }
    
    async componentDidMount(){
        const url = 'http://newsapi.org/v2/top-headlines?' +
                    'country=us&' +
                    'apiKey=95121b77c00d4f83b3d7994d1f8982fc';
        const response = await fetch(url);
        const data = await response.json();
        

        this.setState({headlines: data.articles, loading: false});
        const arr = this.state.headlines
        arr.forEach(item => console.log(item.author))


        console.log(data.articles);
                        
    }

     
   render(){
       if (this.state.loading){
           return <div>loading...</div>
       }

       if (!this.state.headlines){
        return <div>place holder</div>
       }

       return (
           <div>
              <div>
                <div>{this.state.headlines[0].title}</div>
                <div>{this.state.headlines[0].author}</div>
                <div>{this.state.headlines[0].content}</div>
                <div>
                    <a href={this.state.headlines[0].url}>
                        <img src={this.state.headlines[0].urlToImage} alt="news"/>
                    </a>
                </div>     
              
              </div>
           </div>
           
       )
   }
}
export default Window;
