import React from 'react';
import { Link } from 'react-router-dom';
import Results from './search_results';
import {merge} from 'lodash';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.quedQuery = "";
    // {query: "", results: {}, errors: []}
    // this.fetchQuery = this.fetchQuery.bind(this);
    // this.checkQue = this.checkQue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({results: newProps.results});
  }
  // checkQue() {
  //   if (this.quedQuery !== "") {
  //     this.props.fetchQuery(this.quedQuery);
  //   }
  // }
  //
  // fetchQuery(query) {
  //     this.props.searchUsers(this.state.query).then(
  //       this.setState({fetching: false})
  //     ).then(
  //       () => {
  //         if (qued !== "") {
  //           this.props.fetchQuery(qued);
  //         }
  //       }
  //     );
  //   }


  handleChange() {
    const that = this;
    return (e) => {
      if (e.target.value){that.setState({fetching: true});
      that.refs.searchInput.style.backgroundImage = `url(${window.loading})`;
      that.props.searchUsers(e.target.value).then(
        that.setState({fetching: false})
      ).then(
        that.refs.searchInput.style.backgroundImage = "none"
      );
      } else if (e.target.value === "") {
        this.setState({results: {}});
      }
    };
  }

  render() {
    let results;
    if ((typeof Object.keys(this.state.results) === "undefined") || (typeof this.state.results.users === "undefined")) {
    } else if (Object.keys(this.state.results.users).length > 0) {
      results = (
          <Results inputRef={this.refs.searchInput} users={this.state.results.users}/>
        );
    }
    return(
      <section className="search-bar-section ">
        <input
          ref="searchInput"
          type="text"
          className="search-input"
          onChange={this.handleChange()}
          placeholder="Search for User"
        />
          {results}
      </section>
    );
  }
}

export default SearchBar;
