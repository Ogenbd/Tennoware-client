import React, { Component, } from "react";

const withErrorBoundary = WrappedComponent => {
    class AdErrorBoundary extends Component {
        constructor(props) {
          super(props);
          this.state = { hasError: false };
        }
      
        static getDerivedStateFromError(error) {
          return { hasError: true };
        }

        componentDidCatch(error, info) {
          console.log(error, info);
        }
      
        render() {
          if (this.state.hasError) {
            return <div></div>;
          }
      
          return <WrappedComponent />; 
        }
      }
      return AdErrorBoundary;
};

export default withErrorBoundary;