import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UtakaiPage = () => (
  <Layout>
    <SEO title="utakai" />
    <h1>Twi歌会(仮)</h1>
    <p>yanagihaがTwitter上で人を募って開催している短歌の歌会です</p>
    <p>不定期開催でしたが今後は３ヶ月に１回の頻度で定期的に開催していきたいと思います</p>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default UtakaiPage
