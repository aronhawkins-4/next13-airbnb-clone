import { useCountries } from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import { Heading } from '../Heading';
import Image from 'next/image';

interface ListingHeadProps {
	title: string;
	imageSrc: string;
	locationValue: string;
	id: string;
	currentUser?: SafeUser | null;
}

export const ListingHead: React.FC<ListingHeadProps> = ({
	title,
	imageSrc,
	locationValue,
	id,
	currentUser,
}) => {
	const { getByValue } = useCountries();
	const location = getByValue(locationValue);

	return (
		<>
			<Heading
				title={title}
				subtitle={`${location?.region}, ${location?.label}`}
			/>
			<div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
				<Image
					src={imageSrc}
					alt='image'
					fill
					className='object-cover w-full'
				/>
			</div>
		</>
	);
};
