import { Box, Heading, HStack, IconButton, Img, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';


const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")
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
                    <IconButton icon={<DeleteIcon />} colorScheme='red' />
                </HStack>
            </Box>

        </Box>
    )
}

export default ProductCard