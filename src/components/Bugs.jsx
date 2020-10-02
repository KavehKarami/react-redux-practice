import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';

class Bugs extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    console.log(this.context)
  }

  render() {
    return (
      <div>
        Hello World!
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