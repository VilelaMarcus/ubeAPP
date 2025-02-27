// hooks/useCachedAssets.ts
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import { icons } from '../assets/icons';

export default function useCachedAssets() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadAssets() {
      const imageAssets = Object.values(icons)
        .filter((icon) => typeof icon === 'string' || typeof icon === 'number' || Array.isArray(icon))
        .map((icon) => Asset.loadAsync(icon));
      await Promise.all(imageAssets);
      setIsReady(true);
    }

    loadAssets();
  }, []);

  return isReady;
}
