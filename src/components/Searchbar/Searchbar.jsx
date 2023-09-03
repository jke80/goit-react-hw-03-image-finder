import React from 'react';

export class Searchbar extends React.Component {

    state = {
inputValue: "",
}

handleChange = event=>{
    const{value} = event.target;
    this.setState({inputValue:value});
}


handleSubmit = event =>{
    event.preventDefault();
    
    const {onSubmit} = this.props;
    const {inputValue} = this.state;
    
    onSubmit(inputValue);
    
    this.setState({inputValue:""});
    
    event.currentTarget.reset();
}

render() {

const {inputValue} = this.state;

return( <header className="searchbar">
    <form className="form" onSubmit={this.handleSubmit}>
        <button type="submit" className="button">
        <span className="button-label">Search</span>
        </button>

        <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={this.handleChange}
        value={inputValue}
        />
    </form>
    </header>
)}
}
