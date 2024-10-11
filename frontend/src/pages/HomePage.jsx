import { Box, Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
    const { fetchAllProducts, products } = useProductStore()
    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])
    console.log('product check: ', products)
    return (
        <Container maxWidth={'container.xl'} py={12}>
            <VStack spacing={8}>
                <Text fontSize={30}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    bgClip={'text'}
                    bgGradient={'linear(to-r, cyan.500, blue.500)'}
                >
                    Current Products
                </Text>

                <SimpleGrid columns={[1, 2, 3]} spacing='40px' w={'full'}>
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </SimpleGrid>
                <Text fontSize={'xl'} textAlign={'center'} fontStyle={'bold'} color={'gray.500'} >
                    No products found !!! 😥 {" "}
                    <Link to={"/create"}>
                        <Text as='span' color={'blue.500'} _hover={{ textDecoration: "underline" }}>Create a product ! </Text>
                    </Link>
                </Text>
            </VStack>
        </Container>
    )
}

export default HomePage