import React, { useEffect, useState } from 'react';

const ComponentLoader = ({ componentName }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const config = await fetch('/config.json').then(res => res.json());
      const componentConfig = config.components[componentName];
      if (componentConfig) {
        const { default: LoadedComponent } = await import(`${componentConfig.path}`);
        setComponent(() => LoadedComponent);
      }
    };

    if (componentName) {
      loadComponent();
    }
  }, [componentName]);

  return Component ? <Component /> : null;
};

export default ComponentLoader;