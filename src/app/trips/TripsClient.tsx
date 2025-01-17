'use client';

import { Reservation, User, Listing } from '@prisma/client';
import { SafeUser } from '../types';
import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { set } from 'date-fns';
import { ListingCard } from '../components/listings/ListingCard';

interface TripsClientProps {
    reservations: (Reservation & {
        listing: Listing;
    })[];
    currentUser: SafeUser;
}

export const TripsClient: React.FC<TripsClientProps> = ({
    reservations,
    currentUser,
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback(
        (id: string) => {
            setDeletingId(id);
            axios
                .delete(`/api/reservations/${id}`)
                .then(() => {
                    toast.success('Reservation canceled');
                    router.refresh();
                })
                .catch((error) => {
                    toast.error(error);
                })
                .finally(() => setDeletingId(''));
        },
        [router]
    );
    return (
        <Container>
            <Heading
                title="Trips"
                subtitle="Where you've been and where you're going"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        actionLabel="Cancel reservation"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};
