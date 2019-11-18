import React, { Component }  from 'react';
import './App.css';
import axios from 'axios';
import AddBook from './AddBook';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books')
    .then(res => {
      console.log(res.data);
      this.setState({
        books: res.data
      })
    });
  }

  addBook = (name, writer, publisher) => {
    const book = {
      name,
      writer,
      publisher
    }

    axios.post('http://localhost:5000/books', book)
      .then(res => {
        console.log(res.data)
        this.setState({
          books: [res.data, ...this.state.books]
        });
      });   
  }

  deleteBook =  (e) => {
    axios.delete('http://localhost:5000/books/' + e.target.id)
    .then(res => console.log(res.data));
    
    const books = this.state.books.filter(book => {
      return book._id !== e.target.id
    });

    this.setState({
      books
    });
  }

  render() {
    const bookList = this.state.books.length ? (
      this.state.books.map(book => {
          return (
            <div className="card" key={book._id}>
              <div className="card-body">
                <div className="row">
                  <div className="col s4">
                    <h5 className="card-title">{book.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.writer}, {book.publisher}</h6>
                  </div>
                  <div className="col s2">
                    <button className="btn btn-danger" type="button" id={book._id}  onClick={(e) => this.deleteBook(e)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )
      }) 
  ) : (
      <p className="center">There is no books!</p>
  );    
    return (
      <div className="App">
        <div className="alert alert-primary" role="alert">
         <h1>Books Database Manager</h1>
        </div>
        <AddBook addBook={this.addBook} />
        {bookList}
      </div>
    )
  }
}

export default App;
