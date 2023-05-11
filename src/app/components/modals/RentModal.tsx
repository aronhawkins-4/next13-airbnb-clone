'use client';

import { useMemo, useState } from 'react';
import { Modal } from './Modal';
import { useRentModal } from '@/app/hooks/useRentModal';

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
}
export const RentModal = () => {
    const rentModal = useRentModal();
    const [step, setStep] = useState(STEPS.CATEGORY);
    const onBack = setStep((value) => value - 1);
    const onNext = setStep((value) => value + 1);
    // const actionLabel = useMemo(() => {
    //     if (step === STEPS.PRICE) {
    //         return 'Create';
    //     }
    //     return 'Next';
    // }, [step]);
    // const secondaryActionLabel = useMemo(() => {
    //     if (step === STEPS.CATEGORY) {
    //         return undefined;
    //     }
    //     return 'Back';
    // }, [step]);

    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLabel="hello"
            secondaryLabel="hello"
            // secondaryAction={step === STEPS.CATEGORY ? onBack : onBack}
            title="Airbnb your home!"
        />
    );
};
