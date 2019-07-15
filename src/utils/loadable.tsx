import React, { lazy, Suspense } from 'react';

interface LoadableOptions {
  fallback: React.ReactElement<any> | null;
}

const loadable = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  { fallback = null }: LoadableOptions = { fallback: null }
) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
