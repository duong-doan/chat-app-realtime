import React, { lazy, Suspense } from "react";

const loadable = (importFunc, { fallback }) => {
  const LazyComponent = lazy(importFunc);

  const loadableFunc = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return loadableFunc;
};

export default loadable;
