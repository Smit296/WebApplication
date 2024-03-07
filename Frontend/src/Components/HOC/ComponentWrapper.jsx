import React from 'react';
import Header from '../CommonComponent/Header';
import TopHeader from '../CommonComponent/TopHeader';
import Footer from '../CommonComponent/Footer';

const ComponentWrapper = (WrappedComponent) => {
  return class extends React.Component {
    render(props) {
      return (
        <div>
          {/* <TopHeader/> */}
          <Header />
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      );
    }
  };
};

export default ComponentWrapper;
