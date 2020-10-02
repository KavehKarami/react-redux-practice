import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnresolvedBugs, loadBugs, resolvedBug } from '../store/bugs';

const BugsList = () => {

  // NOTE useDispatch looks like mapDispatchToProps in class components
  const dispatch = useDispatch()

  // NOTE useSelector looks like mapStateToProps in class components
  // const bugs = useSelector(state => state.entities.bugs.list)
  const bugs = useSelector(getUnresolvedBugs)

  useEffect(() => {
    dispatch(loadBugs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleResolved = (bugId) => {
    dispatch(resolvedBug(bugId))
  }

  return (
    <div>
      {bugs.map((bug, index) => (
        <div className="mb-3" key={index}>
          <span>{bug.description}</span>
          <button onClick={() => handleResolved(bug._id)} className="ml-3">Resolve it</button>
        </div>
      ))}
    </div>
  );
};

export default BugsList;