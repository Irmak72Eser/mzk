/*import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex flex-wrap justify-between items-center'>
					<Link to='/' className='text-2xl font-bold text-emerald-400 items-center space-x-2 flex'>
						Taze ve Organik Ürünler
					</Link>

					<nav className='flex flex-wrap items-center gap-4'>
						<Link
							to={"/"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-out'
						>
							Home
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-gray-300 hover:text-emerald-400 transition duration-300 
							ease-in-out'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-emerald-400' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
						rounded-md flex items-center transition duration-300 ease-in-out'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
*/
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header
			className="fixed top-0 left- w-full navbar shadow-lg z-20 transition-all duration-100 border-b border-gray-800">
			<div className="container mx-auto px-1 py-0 nav-container">
				<div className="flex flex-wrap justify-between items-center">
					<Link
						to="/"
						className="text-1xl font-bold items-center space-x-4 flex"
						style={{ color: "black" }}
					>
						MZK İstanbul Gurme
					</Link>

					<nav className="flex flex-wrap items-center gap-1">
						<ul className='flex items-center space-x-4 list-none'>
							<li className='px-2 py-1'>
								<Link to={"/tum-urunler"} className="navbar-link">Tüm Ürünler</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/süt-ve-süt-ürünleri"} className="navbar-link">Süt & Süt Ürünleri</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/köy-ürünleri"} className="navbar-link">Köy Ürünleri</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/et-ve-et-ürünleri"} className="navbar-link">Et ve Et Ürünleri</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/zeytin"} className="navbar-link">Zeytin</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/Baharat"} className="navbar-link">Baharat</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/karisimlar-gida-takviyeleri"} className="navbar-link">Karışımlar & Gıda
									Takviyeleri</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/cocuklara-ozel"} className="navbar-link">Çocuklara Özel</Link>
							</li>
							<li className='px-2 py-1'>
								<Link to={"/avantajli-paketler"} className="navbar-link">Avantajlı Paketler</Link>
							</li>
							<li className='px-2 py-1'>
								<Link
									to={"/"}
									className="navbar-link"
								>
									Home
								</Link>
							</li>
						</ul>

						{user && (
							<Link
								to={"/cart"}
								className="relative group text-gray-600 hover:text-gray-800 transition duration-300
                                    ease-in-out"
							>
								<ShoppingCart className="inline-block mr-1 group-hover:text-gray-800" size={20}/>
								<span className="hidden sm:inline">Sepet</span>
								{cart.length > 0 && (
									<span
										className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5
                                        text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out"
									>
                                            {cart.length}
                                        </span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
                                    transition duration-300 ease-in-out flex items-center"
								to={"/secret-dashboard"}
							>
								<Lock className="inline-block mr-1" size={18}/>
								<span className="hidden sm:inline">Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4
                                    rounded-md flex items-center transition duration-300 ease-in-out"
								onClick={logout}
							>
								<LogOut size={18}/>
								<span className="hidden sm:inline ml-2">Çıkış</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4
                                        rounded-md flex items-center transition duration-300 ease-in-out"
								>
									<UserPlus className="mr-2" size={18}/>
									Üye Ol
								</Link>
								<Link
									to={"/login"}
									className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4
                                    rounded-md flex items-center transition duration-300 ease-in-out"
								>
									<LogIn className="mr-2" size={18}/>
									Giriş
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Navbar;


