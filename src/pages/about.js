import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Section = styled.section`
  display: flex;
  > :first-child {
    margin-right: 15px;
  }
  > :last-child {
    margin-left: 15px;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <Section>
      <div style={{ height: 300, width: 200 }}>
        <Image path="Apichan.jpg" />
      </div>
      <div>
        <h2>Apichan Chaiyutthasat</h2>
        <p>I am Blogger, Developer, and Investor.</p>
        <p>Hello everyone. The blog shows my interests and hobbies.</p>
        <p>And shows my experience, knowledge, and opinion.</p>
        <hr></hr>
        <p>You can see <a href="https://resume.ak1103dev.com/">my resume</a> for more information about me</p>
      </div>
    </Section>
  </Layout>
)

export default AboutPage
