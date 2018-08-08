import { connect } from 'react-redux';
import { searchUsers, clearSearchResult } from '../../actions/user_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return {
    query: "",
    results: state.ui.searchResults,
    errors: state.errors.searchErrors,
    fetching: false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: (query) => dispatch(searchUsers(query)),
    clearSearchResult: () => dispatch(clearSearchResult())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
