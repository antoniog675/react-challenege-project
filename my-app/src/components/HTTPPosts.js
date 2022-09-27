import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPosts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }
    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Hello world',
            body: 'It works!',
            userId: 123,
        }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        }
        )

    }
  render() {
    const {apiResponse} =this.state
    return (
      <div>
        <button onClick={this.postToApi}>
            Create post
        </button>
        {
        apiResponse ? (
            <div>
            <h1>{apiResponse.title}</h1>
            <p>{apiResponse.body}</p>
            <p>{apiResponse.userId}</p>
            </div>
        ) : <h1>Click the button above</h1>
        }
      </div>
    )
  }
}

export default HTTPPosts