import * as React from 'react';

export interface DefaultLayoutProps {
  children: any,
}


const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      {children}
    </>
  )
};

export default DefaultLayout;
