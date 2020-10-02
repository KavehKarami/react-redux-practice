import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnresolvedBugs, loadBugs } from '../store/bugs';

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

  return (
    <div>
      {bugs.map((bug, index) => (
        <div key={index}>{bug.description}</div>
      ))}
    </div>
  );
};

export default BugsList;