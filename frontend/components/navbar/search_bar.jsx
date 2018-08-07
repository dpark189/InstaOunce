import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.fetching = false;
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
    return (e) => {
      this.props.searchUsers(e.target.value);
    };
  }

  render() {

    return(
      <section className="search-bar-section">
        <input type="text" className="search-input" onChange={this.handleChange()} placeholder="Search for User"/>
      </section>
    );
  }
}

export default SearchBar;
