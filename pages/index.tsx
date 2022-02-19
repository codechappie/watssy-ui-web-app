import type { NextPage } from 'next'
import { Container, Row, Col, Card, Text, Spacer } from '@nextui-org/react';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Watssy - Watssy Shop</title>
        <meta name="description" content="Watssy is a tool develop for ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Container gap={0}>
          <Row gap={1} css={{ margin: 0 }} >
            <Col>
              <Card color="primary">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  1 of 2
                </Text>
              </Card>
            </Col>
            <Col>
              <Card color="primary">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  2 of 2
                </Text>
              </Card>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row gap={1} css={{ margin: 0 }} >
            <Col>
              <Card color="primary">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  1 of 3
                </Text>
              </Card>
            </Col>
            <Col>
              <Card color="primary">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  2 of 3
                </Text>
              </Card>
            </Col>
            <Col>
              <Card color="primary">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  3 of 3
                </Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </nav>

      <footer>

      </footer>
    </div>
  )
}

export default Home
