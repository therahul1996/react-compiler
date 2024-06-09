import React, { Suspense, lazy } from "react";

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyCompomponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyCompomponent {...props} />
    </Suspense>
  );
};

export default loadable;
