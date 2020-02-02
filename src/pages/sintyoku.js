import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SintyokuPage = () => (
  <Layout>
    <SEO title="sintyoku" />
    <h1>進捗報告所</h1>
    <p>原稿や勉強などの日々の進捗を報告し、成果を発表するDiscordサーバーです</p>
    <p>
      <i class="fab fa-discord"></i>
      <a href="https://discord.gg/DDEZF4p"> 参加はこちらからどうぞ</a>
    </p>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default SintyokuPage