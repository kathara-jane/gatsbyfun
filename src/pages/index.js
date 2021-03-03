import * as React from "react"
import Layout from '../components/Layout'

import { StaticImage} from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi there, my name is Katherine</p>
      <StaticImage src="https://i.pinimg.com/564x/53/07/03/530703e9e226e33490ebbe5c5820b56a.jpg" alt="cute dog"/>
    </Layout>
  )
}

export default IndexPage
