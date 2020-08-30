import RestCreate from '@/features/common/RestCreate';
import React from 'react';
import Form from './Form';

const Create = () => {
  return (
    <RestCreate resource="trips">
      <Form />
    </RestCreate>
  );
};

export default Create;