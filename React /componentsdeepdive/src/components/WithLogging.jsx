import React from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      console.log(`${WrappedComponent.name} is rendered`);
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
