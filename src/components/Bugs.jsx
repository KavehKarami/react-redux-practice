import React, { Component } from 'react';
import { getUnresolvedBugs, loadBugs, resolvedBug } from '../store/bugs';
import { connect } from "react-redux"

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  handleResolved = (bugId) => {
    this.props.resolvedBug(bugId)
  }

  render() {
    return (
      <div>
        {this.props.bugs.map((bug, index) => (
          <div key={index}>
            <span>{bug.description}</span>
            <button onClick={() => this.handleResolved(bug._id)} className="ml-3">Resolve it</button>
          </div>
        ))}
      </div>
    );
  }
}

// get what we want from redux store and give it as a props to us
const mapStateToProps = state => ({
  bugs: getUnresolvedBugs(state)
})

// get what we want to dispatch to the redux store and give it as a props to us
const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs()),
  resolvedBug: (bugId) => dispatch(resolvedBug(bugId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);