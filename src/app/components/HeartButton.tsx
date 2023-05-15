'use client';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { SafeUser } from '../types';
import { useFavorite } from '../hooks/useFavorite';
import { toast } from 'react-hot-toast';

interface HeartButtonProps {
	listingId: string;
	currentUser?: SafeUser | null;
}

export const HeartButton: React.FC<HeartButtonProps> = ({
	listingId,
	currentUser,
}) => {
	const { toggleFavorite, hasFavorited } = useFavorite({
		listingId,
		currentUser,
	});
	return (
		<div
			onClick={(e) => {
				try {
					e.preventDefault();
					toggleFavorite(e);
				} catch (error) {
					toast.error('Something went wrong');
				}
			}}
			className='relative hover:opacity-80 cursor-pointer transition'
		>
			<AiOutlineHeart
				size={28}
				className='fill-white absolute -top-[2px] -right-[2px]'
			/>
			<AiFillHeart
				size={24}
				className={
					hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
				}
			/>
		</div>
	);
};
