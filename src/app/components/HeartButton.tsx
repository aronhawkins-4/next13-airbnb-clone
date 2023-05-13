'use client';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { SafeUser } from '../types';
import { useFavorite } from '../hooks/useFavorite';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface HeartButtonProps {
	listingId: string;
	currentUser?: SafeUser | null;
}

export const HeartButton: React.FC<HeartButtonProps> = ({
	listingId,
	currentUser,
}) => {
	const { toggleFavorite } = useFavorite({
		listingId,
		currentUser,
	});
	const [isFavorite, setIsFavorite] = useState<boolean>();

	return (
		<div
			onClick={(e) => {
				try {
					e.preventDefault();
					toggleFavorite(e);
					setIsFavorite((value) => !value);
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
				className={isFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}
			/>
		</div>
	);
};
