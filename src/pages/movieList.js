import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MovieListPage = () => (
  <Layout>
    <SEO title="utakai" />
    <h1>上映リスト</h1>
    <h2>2020年</h2>
    <ol>
      <li>ジュラシック・シャーク</li>
      <li>ラ・ラ・ランド</li>
      <li>ワンス・アポン・ア・タイム・イン・ハリウッド</li>
    </ol>
    <h2>2019年</h2>
    <ol>
      <li>万引き家族</li>
      <li>カメラを止めるな</li>
      <li>レディ・バード</li>
      <li>残穢</li>
      <li>ファイトクラブ</li>
      <li>英国王のスピーチ</li>
      <li>帰ってきたヒトラー</li>
      <li>コードネームアンクル</li>
      <li>震える舌</li>
      <li>ニュー・シネマ・パラダイス</li>
      <li>怪怪怪怪物</li>
      <li>隠し剣 鬼の爪</li>
      <li>アメリカン・スナイパー</li>
      <li>サスペリア</li>
      <li>お嬢さん</li>
      <li>ザ・セル</li>
      <li>ハウスシャーク</li>
      <li>グッバイレーニン</li>
      <li>ミスミソウ</li>
      <li>サスペリアリメイク</li>
      <li>アリス</li>
    </ol>
    <Link to="/movie/">Go back to previous page</Link>
  </Layout>
)

export default MovieListPage
