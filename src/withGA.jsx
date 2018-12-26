import React, { Component, } from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize("UA-131328202-1");

const withGA = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (process.env.NODE_ENV !== 'development') {
      GoogleAnalytics.set({
        page,
        ...options,
      });
      GoogleAnalytics.pageview(page);
    }
  };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withGA;