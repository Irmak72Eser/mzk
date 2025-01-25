/*import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/kasar", name: "Kaşar", imageUrl: "/kasar.jpg" },
	{ href: "/Zeytin", name: "Zeytin", imageUrl: "/zeytin.jpg" },
	{ href: "/Jersey_sut", name: "Jersey_süt", imageUrl: "/jersey_sut.jpg" },
	{ href: "/yumurta", name: "Yumurta", imageUrl: "/yumurta.jpg" },
	{ href: "/yaprak", name: "Yaprak", imageUrl: "/yaprak.jpg" },
	{ href: "/helva", name: "helva", imageUrl: "/helva.jpg" },
	{ href: "/ankara_bali", name: "Ankara Balı", imageUrl: "/ankara_bali.jpg" },
	{ href: "/Banada", name: "Banada", imageUrl: "/Banada.jpg" },
	{ href: "/Pekmez", name: "Pekmez", imageUrl: "/Pekmez.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					MZK İstanbul Gurme Hoşgeldiniz
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Lezzetli ve Kaliteli Ürünlerimizi Keşfedin
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
*/

import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/kasar", name: "Kaşar", imageUrl: "/kasar.jpg" },
	{ href: "/zeytin", name: "Zeytin", imageUrl: "/zeytin.jpg" },
	{ href: "/jersey_sut", name: "Jersey Süt", imageUrl: "/jersey_sut.jpg" },
	{ href: "/yumurta", name: "Yumurta", imageUrl: "/yumurta.jpg" },
	{ href: "/yaprak", name: "Yaprak", imageUrl: "/yaprak.jpg" },
	{ href: "/helva", name: "Helva", imageUrl: "/helva.jpg" },
	{ href: "/ankara_bali", name: "Ankara Balı", imageUrl: "/ankara_bali.jpg" },
	{ href: "/banada", name: "Banada", imageUrl: "/Banada.jpg" },
	{ href: "/pekmez", name: "Pekmez", imageUrl: "/Pekmez.jpg" },
	{ href: "/Tahin", name: "Tahin", imageUrl: "/Tahin.jpg" },
	{ href: "/Peynir_helvasi", name: "Kızarmış Peynir Helvasi", imageUrl: "/Peynir_helvasi.jpg" },
	{ href: "/Karakovan_balı", name: "Karakovan Balı", imageUrl: "/Karakovan_bal.jpg" },
	{ href: "/Tahin_helva", name: "Vanilya Aromalı Tahin Helvası", imageUrl: "/Tahin_helva.jpg" },
	{ href: "/kurabiye", name: "Kavala Kurabiyesi", imageUrl: "/kurabiye.jpg" },
	{ href: "/yesil_zeytin", name: "Yeşil Zeytin", imageUrl: "/yesil_zeytin.jpg" },
	{ href: "/uluova_yogurt", name: "Uluova Yoğurt", imageUrl: "/uluova_yogurt.jpg" },
	{ href: "/fistik", name: "Fıstık", imageUrl: "/fistik.jpg" },
	{ href: "/bulgur", name: "bulgur", imageUrl: "/bulgur.jpg" },
	{ href: "/kirma_yesil_zeytin", name: "Kırma Yeşil Zeytin", imageUrl: "/kirma_yesil_zeytin.jpg" },


];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className="relative min-h-screen  overflow-hidden">
			<div className="relative z-14 max-w-6xl mx-auto px-1 sm:px-1 lg:px-2 py-20">
				<h1 className="text-center text-2xlxl sm:text-6xl font-bold  mb-4 text-orange-400">
					MZK İstanbul Gurme Hoşgeldiniz
				</h1>
				<p className="text-center text-xl  mb-10 text-orange-400">
					Lezzetli ve Kaliteli Ürünlerimizi Keşfedin
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;