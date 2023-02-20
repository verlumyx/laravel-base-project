import React from 'react';
import {Suspense} from 'react';

import {Loader} from './Loader';

const Loadable = (Component) => () => (
  <Suspense fallback={<Loader />}>
    <Component/>
  </Suspense>
);

export default Loadable;
