import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useCartStore } from '../path/to/useCartStore'; // Doğru yolu belirtin
import { useProductsStore } from '../path/to/useProductsStore'; // Doğru yolu belirtin

const HomeScreen = () => {
  const { cart, getCartItems } = useCartStore(); // sepet verilerini buradan çekeriz
  const { products, getProducts,loading } = useProductsStore(); // ürün verilerini buradan çekeriz

  useEffect(() => {
    getProducts() // ürünleri çeker
    getCartItems();  //sepet verilerini çeker
  }, []);

  if(loading)
    return <Text>Loading...</Text>
  return (
      <View>
        {products.map((product) => ( // Ürünleri ekrana yazar
            <Text key={product._id}>{product.title}</Text>
        ))}
      </View>
  );
};

export default HomeScreen;