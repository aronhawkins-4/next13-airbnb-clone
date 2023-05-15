'use client';

import { useSearchModal } from '@/app/hooks/useSearchModal';
import { BiSearch } from 'react-icons/bi';
export const Search = () => {
	const searchModal = useSearchModal();
	return (
		<div
			onClick={searchModal.onOpen}
			className='border w-full md:w-auto py-2  px-4 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
		>
			<div className='flex flex-row items-center justify-between gap-4'>
				<div className='hidden sm:block text-sm font-semibold '>
					Anywhere
				</div>
				<div className='hidden sm:block px-6 text-sm font-semibold border-x flex-1 text-center'>
					Any week
				</div>
				<div className='text-sm  text-gray-600 flex flex-row items-center gap-3'>
					Add guests
				</div>
				<div className=' bg-rose-500 rounded-full text-white p-1'>
					<BiSearch size={18} />
				</div>
			</div>
		</div>
	);
};
