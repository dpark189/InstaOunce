import { connect } from 'react-redux';
import { searchUsers } from '../../actions/user_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return {
    query: "",
    results: state.ui.searchResults,
    errors: state.errors.searchErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: (query) => dispatch(searchUsers(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
