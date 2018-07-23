import React from 'react';
import { merge } from 'lodash';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.comment;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const copy = merge({}, this.state);
    if (this.props.parentType === "Post") {
      this.props.submitActionPost(copy).then(this.setState({body: ""}));
    } else {
      this.props.submitActionComment(copy).then(this.setState({body: ""}));
    }
  }

  render() {

    // ------- comment errors ---------
    const stateErrors = this.props.errors;
    debugger
    let errors = {
      body: ""
    };
    if (Object.values(this.props.errors).length === 0) {} else {
      Object.keys(stateErrors).forEach((key) => {
        errors[`${key}`] = stateErrors[key].map((err, i) => {
          let label = key.charAt(0).toUpperCase() + key.slice(1);
          return (
          `${label} ${err}`
          );
        });
      });
    }
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input id={`comment-input`} className={`comment-input ${errors.body === "" ? "" : "comment-error"}`}
          onChange={this.handleChange("body")}
          type="text"
          value={this.state.body}
          placeholder={errors.body === "" ? `Add a comment...` : errors.body}
        />
        <input className="hidden" type="submit" value="hidden button" />
      </form>
    );
  }
}

export default CommentForm;
