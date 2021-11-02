import * as React from "react"
import Layout from "../components/layout";
import { test } from "../styles/about.module.css"

const aboutPage = () => (
    <Layout>
        <p className={test}>About Page</p>
    </Layout>
)

export default aboutPage;