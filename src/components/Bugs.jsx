import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';
import { loadBugs } from '../store/bugs';

class Bugs extends Component {
  static contextType = StoreContext;

  state = {
    bugs: []
  }

  componentDidMount() {
    const store = this.context;

    this.unSubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if (bugsInStore !== this.state.bugs)
        this.setState({ bugs: bugsInStore })
    })

    store.dispatch(loadBugs())
  }

  componentWillUnmount() {
    this.unSubscribe()
  }

  render() {
    return (
      <div>
        {this.state.bugs.map((bug, index) => (
          <div key={index}>{bug.description}</div>
        ))}
      </div>
    );
  }
}

export default Bugs;

// const Bugs = () => {

//   const store = useContext(StoreContext)

//   useEffect(() => {
//     console.log(store);
//   }, [store])

//   return (
//     <div>
//       Hello World!
//     </div>
//   );
// }


// export default Bugs;