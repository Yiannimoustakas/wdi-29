import React, { PureComponent } from 'react';

// Pure functional version of HelloUser: just a standard function
// const HelloUser = function( props ){
//   console.log(props);
//   return (
//     <div className="user">
//       <h2>Hello, { props.name }!</h2>
//       <img src={`http://placekitten.com/${props.imgWidth}/${props.imgHeight}`} />
//     </div>
//   );
// };

const KittenImage = function( props ){
  return <img src={`http://placekitten.com/${props.width}/${props.height}`} />;
};

// Class version of HelloUser:
// Ruby: class Post < ActiveRecord
class HelloUser extends PureComponent {

  // Any React component class must have at least a render() method
  // to tell React how to draw this component in the browser -
  // and render() must return some JSX
  render(){
    return (
      <div className="user">
        <h2>Hello, { this.props.name }!</h2>
        <KittenImage width={this.props.imgWidth} height={this.props.imgHeight} />
    </div>
    );
  } // render

} // class HelloUser





export default HelloUser;
