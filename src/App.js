import React from 'react'
import SearchBar from './Components/SearchBar'
import axios from 'axios'
import ImageList from './Components/ImageList'


class App extends React.Component{

  constructor(){
    super()
    this.state = {image: []}
  }
  
  onSearchSubmit = async(term)=> {
    const response = await(
    axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 6kbOnPCpdljv-E1bBPU7G6zT4MFalEIan8xY5S1XVMA'
            }
        }))
        this.setState({image: response.data.results})
}

  render(){
    return(
      <div>
        <SearchBar userSubmit={this.onSearchSubmit}/>
        
        <ImageList foundImages={this.state.image}/>
      </div>
    )
  }
}

export default App
