import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MoviePage = () => (
  <Layout>
    <SEO title="movie" />
    <h1>たこカ映像支部</h1>
    <p>毎週金曜日21時頃からAmazonPrimeにある映画を同時再生してDiscord上でチャットしながら観ています</p>
    <p>参加頻度が多い人も少ない人も誰でも歓迎しています</p>
    <p><Link to="/movieList/">これまでの上映リスト</Link></p>
    <p>
      <i class="fab fa-discord"></i>
      <a href="https://discord.gg/MfQwPJj"> 参加はこちらからどうぞ</a>
    </p>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default MoviePage
