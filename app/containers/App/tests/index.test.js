import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SideNav from 'containers/SideNav';
import App from '../index';

describe('<App />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render the header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header)).toHaveLength(1);
  });

  it('should render the sidenav', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(SideNav)).toHaveLength(1);
  });

  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route)).not.toHaveLength(0);
  });

  it('should render the footer', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Footer)).toHaveLength(1);
  });

  describe('Mobile Side Nav', () => {
    it('should open on handleDrawerOpen()', () => {
      const renderedComponent = shallow(<App />);
      renderedComponent.instance().handleDrawerOpen();
      expect(renderedComponent.state().mobileOpen).toBe(true);
    });

    it('should close on handleDrawerClose()', () => {
      const renderedComponent = shallow(<App />);
      renderedComponent.instance().handleDrawerClose();
      expect(renderedComponent.state().mobileOpen).toBe(false);
    });
  });
});
