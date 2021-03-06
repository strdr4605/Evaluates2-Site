import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { toggleDrawer as toggleDrawerAction } from '../state/app';

const Paper = styled.aside`
  position: fixed;
  z-index: ${p => p.theme.zIndex.drawer};
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${p => p.theme.size(16)};
  background: ${p => p.theme.palette.secondary.main};
  transition: transform 0.3s ease-in-out;
  transform: translateX(${p => (p.isDrawerOpen ? 0 : `-${p.theme.size(16)}`)});
`;

const Item = styled(Link)`
  color: ${p => p.theme.palette.secondary.contrast};
  /* padding: ${p => p.theme.size(1)} ${p => p.theme.size(2)}; */

  /* padding: 50px; */
  transition: background-color 0.1s ease-out;
  &:hover {
    background: ${p => p.theme.palette.secondary.dark};
  }
  cursor: pointer;
`;

const items = [
  { url: '/', name: 'Home' }, 
  { url: '/about/', name: 'About' }, 
  { url: '/engineering/', name: `Engineering` }, 
  { url: '/product-management/', name: 'Product Management' }, 
  { url: '/data-and-analytics/', name: 'Data & Analytics' }, 
  { url: '/startup/', name: 'Product Discovery' },
  { url: '/our-work/', name: 'Our Work' },
  { url: '/contact/', name: 'Contact' }
];

const Drawer = ({ isDrawerOpen, toggleDrawer }) => (
  <Paper isDrawerOpen={isDrawerOpen}>
    {items.map(item => (
      <Item key={item.url} to={item.url} onClick={() => toggleDrawer(false)}>
        {item.name}
      </Item>
    ))}
  </Paper>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Drawer);
