import React from 'react';


export interface ViewFinderProps {
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ViewFinder = ({
  label,
  ...props
}: ViewFinderProps) => {
  return (
    <div>
      This is the ViewFinder! {label}
    </div>
  );
};
