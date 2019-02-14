import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../../actions/books';
import App from '../../components/App/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy, searchQuery) => {
    books = books.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
    switch (filterBy) {
        case 'all':
            return books;
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author');
        default:
            return books
    }
};

// const filterBooks = (books, searchQuery) =>
//     books.filter(
//         o =>
//             o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
//             o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
//     );
//
// const searchBooks = (books, searchBooks, filterBy) => {
//   return sortBy(filterBooks(books, searchBooks), filterBy)
// };

const mapStateToProps = ({books, filter}) => ({
    books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(bookActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
