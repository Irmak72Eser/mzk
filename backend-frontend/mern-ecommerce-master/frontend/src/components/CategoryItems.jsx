import React from 'react'

const CategoryItem = ({category}) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg ">
            <div className="overflow-hidden">
                <img src={category.imageUrl} alt={category.name} className="w-full object-cover hover:scale-110 transition-all duration-300 h-40"/>
            </div>
            <div className="p-4">
                <h3 className='text-center font-semibold mb-2'>{category.name}</h3>
                <p className='text-center mb-2'>Explore {category.name}</p>
            </div>
        </div>
    )
}

export default CategoryItem