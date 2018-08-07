import React from 'react';
import { Link } from 'react-router-dom';

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
      that.setState({fetching: true});
      that.refs.searchInput.style.backgroundImage = `url(${window.loading})`;
      that.props.searchUsers(e.target.value).then(
        that.setState({fetching: false})
      ).then(
        that.refs.searchInput.style.backgroundImage = "none"
      );
    };
  }

  render() {
    let background = this.state.fetching ? `url(${window.loading})` : "none";
    return(
      <section className="search-bar-section">
        <input
          ref="searchInput"
          type="text"
          className="search-input"
          onChange={this.handleChange()}
          placeholder="Search for User"
        />
      </section>
    );
  }
}

export default SearchBar;
