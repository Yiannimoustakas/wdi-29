import React, { Component } from 'react';

import { Link } from 'react-router-dom';


const MostFAQs = props => {
  return (
    <div>
      <h1>Most Frequently Asked Questions</h1>
      <ul>
        { props.faqs.map( link => (<li>
          <Link to={`/faq/${ link.id }`}>
            { link.text }
          </Link>
        </li>) )  }
      </ul>
    </div>
  );
};


class Home extends Component {

  constructor(){
    super();

    this.state = {
      faqLinks: [
        {id: 5,  text: 'Where am I?'},
        {id: 6,  text: 'How do I donate money to this outstanding site?'},
        {id: 11, text: 'When will Microsoft destroy GitHub?'},
      ]
    };

  }

  gotoFAQ( id ){
    this.props.history.push(`/faq/${ id }`);  // gives us a route like '/faq/100'
  }


  render(){
    return (
      <div className="home">
        <h1>This is the Home page</h1>
        <ul>
          <li>Why not check out the <Link to="/faq">FAQ</Link> while you're here!</li>
          <li>What is this site for exactly? That questions is answered in <Link to="/faq/123">FAQ #123</Link></li>
          <li>
            This buttons links to FAQ #100:
            <button onClick={ () => this.gotoFAQ(100) }>Click me</button>
          </li>
        </ul>

        <MostFAQs faqs={this.state.faqLinks} />

      </div>
    );
  }

}

export default Home;
