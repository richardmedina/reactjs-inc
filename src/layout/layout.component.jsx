import React from 'react'

import LayoutHeader from '../components/layout-header/layout-header.component'
import LayoutBody from '../components/layout-body/layout-body.component'
import LayoutFooter from '../components/layout-footer/layout-footer.component'

const Layout = ({ children }) =>
  <>
    <LayoutHeader />
    <LayoutBody>
      { children }
    </LayoutBody>
    <LayoutFooter />
  </>

export default Layout
