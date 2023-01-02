import React from 'react'
import { RecoilRoot } from 'recoil'
import { Layout } from './components/Layout'
import GlobalStyles from "./styles/GlobalStyles"

function App() {

  return (
    <RecoilRoot>
      <Layout />
      <GlobalStyles />
    </RecoilRoot>
  )
}

export default App
