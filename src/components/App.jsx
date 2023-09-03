import React from "react";
import { MagnifyingGlass } from 'react-loader-spinner';

import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";

export class App extends React.Component {
  state = {
    
    isLoading:true,
  }
  handleSubmitSearch = (str)=>{
    console.log(str);
  }
  
  render(){
    const {isLoading} = this.state;
  return (
     <div className="app">
    <Searchbar onSubmit={this.handleSubmitSearch}/>  
    <MagnifyingGlass
  visible={isLoading}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>

    <Button name='Load more'/>
    </div>
  );}
};
