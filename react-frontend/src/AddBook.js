import React, { Component } from 'react';

class AddBook extends Component {
    state= {
        name: '',
        writer:'',
        publisher: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleClick = () => {
        this.props.addBook(this.state.name, this.state.writer, this.state.publisher);
        this.setState({
            name: '',
            writer: '',
            publisher: ''
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book Name</label>
                        <input type="text" name="name" placeholder="Enter Book Name" onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="writer">Writer</label>
                        <input type="text" name="writer" placeholder="Enter Book Writer" onChange={this.handleChange} value={this.state.writer}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Publisher</label>
                        <input type="text" name="publisher" placeholder="Enter Publisher" onChange={this.handleChange} value={this.state.publisher}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Add Book</button>
                </form>
            </div>
        )
    }
}

export default AddBook;