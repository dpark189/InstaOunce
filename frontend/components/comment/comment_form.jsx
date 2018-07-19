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
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input id="comment-input" className="comment-input"
          onChange={this.handleChange("body")}
          type="text"
          value={this.state.body}
          placeholder="Add a comment..."
        />
        <input className="hidden" type="submit" value="hidden button" />
      </form>
    );
  }
}

export default CommentForm;
