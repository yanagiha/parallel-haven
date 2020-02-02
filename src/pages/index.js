import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>All’s right with the world!</p>
    <ul>
      <li><Link to="/profile/">profile</Link></li>
      <li><Link to="/utakai/">utakai</Link></li>
      <li><Link to="/movie/">movie</Link></li>
      <li><Link to="/sintyoku/">sintyoku</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
