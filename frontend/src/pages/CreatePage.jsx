import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    })
    const { createProduct } = useProductStore()
    const toast = useToast()
    const handleAddNewProduct = async () => {
        const { success, errMessage } = await createProduct(newProduct)
        if (success) {
            toast({
                title: 'Product created.',
                description: errMessage,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top'
            })
        } else {
            toast({
                title: `Product don't created.`,
                description: errMessage,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top'
            })
        }
        setNewProduct({
            name: '',
            price: '',
            image: ''
        })

    }
    return (
        <Container maxWidth={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} >
                    Create New Product
                </Heading>
                <Box w={'full'} bg={useColorModeValue("white", "gray.800")} p={6} rounded={'lg'} shadow={'md'} >
                    <VStack spacing={4}>
                        <Input placeholder='Product Name ....' name='name' value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                        <Input placeholder='Price Product ....' name='price' value={newProduct.price} type='number'
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                        <Input placeholder='Image Product ....' name='image' value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />

                        <Button colorScheme='blue' onClick={handleAddNewProduct} color={'white'} >Add New Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage
