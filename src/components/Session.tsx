import * as React from 'react';

export interface SessionProps {
  children: any
}

const Session = ({ children }: SessionProps) => {


  return (
    <div>
      {children}
    </div>
  )
};


export default Session;
