import React, { Component } from 'react';
import { loadBugs } from '../store/bugs';
import { connect } from "react-redux"

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs()
  }

  render() {
    return (
      <div>
        {this.props.bugs.map((bug, index) => (
          <div key={index}>{bug.description}</div>
        ))}
      </div>
    );
  }
}

// get what we want from redux store and give it as a props to us
const mapStateToProps = state => ({
  bugs: state.entities.bugs.list
})

// get what we want to dispatch to the redux store and give it as a props to us
const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);