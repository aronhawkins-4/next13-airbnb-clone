import { Logo } from './Logo';
import { Container } from '../Container';
import { Search } from './Search';
import { UserMenu } from './UserMenu';
import { SafeUser } from '@/app/types';
import { Categories } from './Categories';

interface NavbarProps {
	currentUser?: SafeUser | null;
}
export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	return (
		<div className='fixed w-full bg-white z-10 shadow-sm'>
			<div className='py-4 border-b'>
				<Container>
					<div className='flex flex-row items-center justify-between gap-4 md:gap-0'>
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
			<Categories />
		</div>
	);
};
