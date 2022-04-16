import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';
import { ConnectButton } from '@oyster/common';

interface HowToBuyModalProps {
  buttonClassName: string;
  onClick?: any;
}

export const HowToBuyModal: React.FC<HowToBuyModalProps> = ({
  buttonClassName,
  onClick,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="GATCHA"
      modalTitle={`Buying NFTs on ${LABELS.STORE_NAME}`}
      cardProps={[
        {
          title: 'Create a SOL wallet',
          imgSrc: '/modals/how-to-buy-1.svg',
          description: ``,
        },
        {
          title: 'Add funds to your wallet',
          imgSrc: '/modals/how-to-buy-2.svg',
          description: ``,
        },
        {
          title: `Connect your wallet to ${LABELS.STORE_NAME}.`,
          imgSrc: '/modals/how-to-buy-3.jpg',
          description: ``,
          endElement: <ConnectButton className={'secondary-btn'} />,
        },
      ]}
      onClick={onClick}
    />
  );
};
