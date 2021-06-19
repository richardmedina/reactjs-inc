import React from 'react'

import LayoutHeader from '../components/layout-header/layout-header.component'
import LayoutContent from '../components/layout-content/layout-content.component'
import LayoutFooter from '../components/layout-footer/layout-footer.component'

const Layout = ({ children }) =>
  <div>
    <LayoutHeader />
    <LayoutContent>
      { children }
    </LayoutContent>
    <LayoutFooter />
  </div>

export default Layout
