import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
/* import Image from "../components/image" */

const ProfilePage = () => (
  <Layout>
    <SEO title="profile" />
    <h1>yanagiha</h1>
    <p>眠い眠いと思っていたらいつの間にか時間が過ぎている</p>
    <ul>
    <li>Twitter: <a href="https://twitter.com/yanagihatei">yanagihatei</a></li>
    <li>Github: <a href="https://github.com/yanagiha">yanagiha</a></li>
    <li>Qiita: <a href="https://qiita.com/yanagiha">yanagiha</a></li>
    </ul>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default ProfilePage
