import { Box, Heading, HStack, IconButton, Img, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useProductStore } from '../store/product';


const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")
    const { deleteProduct, fetchAllProducts } = useProductStore()
    const toast = useToast()
    const handleDeleteProduct = async (productId) => {
        const { success, errMessage } = await deleteProduct(productId)
        if (success) {
            toast({
                title: 'Product is deleted .',
                description: errMessage,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top'
            })
        } else {
            toast({
                title: `Product isn't deleted.`,
                description: errMessage,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top'
            })
        }
        await fetchAllProducts()
    }
    return (
        <Box shadow={'lg'}
            rounded={'lg'}
            overflow={'hidden'}
            transition={'all 0.3s'}
            _hover={{ transform: 'translateY(-5px)', shadow: "xl" }}
            bg={bg}
        >
            <Img src={product.image} alt={product.name} h={48} w={'full'} objectFit={'fill'} />
            <Box p={4}>
                <Heading as='h3' size={'md'} mb={2}>
                    {product.name}
                </Heading>
                <Text fontSize={'xl'} mb={4} fontWeight={'bold'} color={textColor}>{product.price}</Text>
                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} colorScheme='blue' />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' />
                </HStack>
            </Box>

        </Box>
    )
}

export default ProductCard