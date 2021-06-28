import { useState } from 'react';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

const override = css`
  display: block;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
`;

const Spinner = ({ loading = true }) => {
  return (
    <BounceLoader color="#58a6ff" css={override} loading={loading} size={150} />
  );
};

export default Spinner;
