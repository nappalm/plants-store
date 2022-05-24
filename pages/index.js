import { useCallback, useContext } from 'react'
import styled from '@emotion/styled'

import Card from '../components/card'
import Flex from '../components/flex'
import Image from '../components/image'
import Button from '../components/button'

import { Offer, Title } from '../components/text'

import Counter from '../components/counter'

import data from '../__mock'

const GridItems = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  grid-row-gap: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`

import { StoreContext } from '../app/storeContext'

const Root = () => {
  const { items, toggleItem } = useContext(StoreContext)

  console.log(items)

  const handleAdd = item => toggleItem(item)

  const existItem = useCallback(
    item => {
      const someEl = items.some(({ id }) => id == item.id)
      return someEl
    },
    [items]
  )

  return (
    <Flex direction="column">
      <GridItems>
        {data.map(item => {
          const inStore = existItem(item)
          return (
            <Card showShadow={inStore} key={item.id} textAlign="center">
              {item.offer && <Offer />}
              <Image src={`plants-v2/${item.image}`} alt={item.title} />
              <Flex gap={1} p={1}>
                <Title>{item.title}</Title>
                <Flex direction="row" gap={1}>
                  <Title textDecoration={item.offer && 'line-through'}>
                    ${item.price}
                  </Title>
                  {item.offer && <Title>${item.offer_value}</Title>}
                  USD
                </Flex>
                <Counter />
              </Flex>
              <Button
                focused={inStore}
                onClick={() => handleAdd(item)}
                mb={0.5}
                mt={0.5}
                w="100%"
              >
                {inStore ? 'Remove from cart' : 'Add to cart'}
              </Button>
            </Card>
          )
        })}
      </GridItems>
    </Flex>
  )
}

export default Root
