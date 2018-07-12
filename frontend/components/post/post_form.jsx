import React from 'react';
import { merge } from 'lodash';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.state = newProps.post;
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const copy = merge({}, this.state);
    this.props.formAction(copy);
  }

  render () {

    return (
      <div className="post-form-div top-div">
        <form className="post-form" onSubmit={this.handleSubmit}>
          <input placeholder="image not yet implemented"/>
          <input
            placeholder="caption"
            value={this.state.caption}
            onChange={this.handleChange('caption')}
          />
          <input type="submit" value="Create Post"/>
        </form>
      </div>
    );
  }
}
