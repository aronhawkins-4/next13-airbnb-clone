import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from './components/navbar/Navbar';
import { RegisterModal } from './components/modals/RegisterModal';
import { Toaster } from 'react-hot-toast';
import { LoginModal } from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import { RentModal } from './components/modals/RentModal';
import { SearchModal } from './components/modals/SearchModal';

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
};

const font = Nunito({
	subsets: ['latin'],
});
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang='en'>
			<body className={font.className}>
				<Toaster />
				<RentModal />
				<LoginModal />
				<RegisterModal />
				<SearchModal />
				<Navbar currentUser={currentUser} />
				<div className='pb-20 pt-28'>{children}</div>
			</body>
		</html>
	);
}
