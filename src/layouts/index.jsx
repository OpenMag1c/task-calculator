import React from "react"

import {PageLayout, MainWindow} from './components'
import Header from "@/components/Header"

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
