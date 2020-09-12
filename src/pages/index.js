import React from "react"
import SEO from "../components/seo"
import '../layouts/fundamental-layouts.css'
import IndexTemplate from "../components/templates/index-template"

const IndexPage = () => {

  return (
    <div>
      <SEO title='home' />
      <IndexTemplate />
    </div>
  )
}

export default IndexPage
