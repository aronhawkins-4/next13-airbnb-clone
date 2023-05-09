import { BiSearch } from 'react-icons/bi';
export const Search = () => {
	return (
		<div className='border w-full md:w-auto py-2  px-4 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
			<div className='flex flex-row items-center justify-between gap-4'>
				<div className='hidden sm:block text-sm font-semibold '>
					hello
				</div>
				<div className='hidden sm:block px-6 text-sm font-semibold border-x flex-1 text-center'>
					howdy
				</div>
				<div className='text-sm  text-gray-600 flex flex-row items-center gap-3'>
					Add Guests
				</div>
				<div className=' bg-rose-500 rounded-full text-white p-1'>
					<BiSearch size={18} />
				</div>
			</div>
		</div>
	);
};
