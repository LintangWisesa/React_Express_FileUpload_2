import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = ({img:false})
  }
  upload = (file) => {
    var url = 'http://localhost:5000/'
    var formData = new FormData()
    formData.append('file', file)
    var config = {
      headers:
      {'Content-Type': 'multipart/form-data'}
    }
    return axios.post(url, formData, config)
    .then((res)=>{
      console.log(res.data)
      this.setState({img:res.data})
    })
  }
  render() {
    var hasilUpload
    if(this.state.img){
      hasilUpload = 
      <div>
        <img src={`http://localhost:5000/img/${this.state.img}`}
        alt='' style={{width:'30%', height:'30%'}}/>
      </div>
    } else {hasilUpload = <div></div>}
    return (
      <div className="App">
        <h1>React File Upload</h1>
        <form encType="multipart/form-data">
          <input type='file' name='filename'
          onChange={(x)=>{this.upload(x.target.files[0])}}
          accept="image/*"
          />
        </form>
        {hasilUpload}
      </div>
    );
  }
}

export default App;
