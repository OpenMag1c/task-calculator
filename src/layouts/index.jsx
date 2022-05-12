import React from "react"

import {PageLayout, MainWindow} from './components'
import Header from "@/containers/Header"

export default ({ children }) => {
  return (
    <PageLayout>
      <Header />
      <MainWindow>
        {children}
      </MainWindow>
    </PageLayout>
  )
}
