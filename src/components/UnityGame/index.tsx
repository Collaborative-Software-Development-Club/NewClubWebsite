'use client';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityGame = ({ path }: { path: string }) => {
    const { unityProvider } = useUnityContext({
        loaderUrl: `${path}/Build/Builds.loader.js`,
        dataUrl: `${path}/Build/Builds.data`,
        frameworkUrl: `${path}/Build/Builds.framework.js`,
        codeUrl: `${path}/Build/Builds.wasm`,
    });

    return <Unity unityProvider={unityProvider} />;
};

export default UnityGame;
