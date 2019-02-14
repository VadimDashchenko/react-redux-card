import React, { Component } from 'react';
import axios from 'axios';
import BookCard from '../../containers/BookCard';
import Filter from '../../containers/Filter';
import Header from '../../containers/Header';
import { Container, Card } from 'semantic-ui-react';

class App extends Component {

    componentWillMount() {
        const { setBooks } = this.props;
        axios.get('/books.json')
            .then(({data}) => setBooks(data)
            )};

  render() {
      const { books, isReady } = this.props;
    return (
        <Container >
            <Header />
            <Filter />
            <Card.Group itemsPerRow={4}>
                {!isReady ? 'Загрузка...' :  books.map((book, index) => (
                    <BookCard key={index} {...book} />
                ))}
            </Card.Group>
        </Container>
    )
  }
}




export default App;