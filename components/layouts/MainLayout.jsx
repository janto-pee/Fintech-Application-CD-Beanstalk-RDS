import React, { Fragment } from 'react'
import { Header } from './Header'
import { HeadHtml } from '../head/Head'

const MainLayout = ({ content, children, title, className }) => {
  return (
    <Fragment>
      <HeadHtml content={content} title={title} />
      <Header />
      <main className={className}>{children}</main>
    </Fragment>
  )
}

export default MainLayout
