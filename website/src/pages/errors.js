import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import 'url-search-params-polyfill';
import styles from './styles.module.css'
import errorCodes from '../../../errors.json'

function Errors() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const errorCode = new URLSearchParams(window.location.search).get("code");
  const error = errorCodes[errorCode];

  return (
    <Layout
      title={`${siteConfig.title} - A predictable state container for JavaScript apps.`}
      description="A predictable state container for JavaScript apps."
    >
      <main className={styles.mainFull}>
        <h1>Production Error Codes</h1>
        <p>
          When Redux is built and running in production, error text is replaced
          by indexed error codes to save on bundle size. These errors will provide a link to this page with more information about the error below.
        </p>
        {error && 
        <React.Fragment>
          <p><strong>The full text of the error you just encountered is:</strong></p>
          <code className={styles.errorDetails}>
            {error}
          </code>
        </React.Fragment>
        }
        
      </main>
    </Layout>
  )
}

export default Errors
