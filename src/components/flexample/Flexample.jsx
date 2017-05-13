import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Link from 'components/link/Link'

const Flexample = () => (
  <div>
    <h2>Flexbox</h2>
    <Grid fluid>
      <Row>
        <Col xs={6} md={3}>
          Hello, world!
          Ez itt a <Link href="https://github.com/roylee0704/react-flexbox-grid">React Flexbox</Link>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Flexample
