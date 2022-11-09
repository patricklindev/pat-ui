import { useRef } from 'react';

type CancelThrottleAction = () => void;
type ThrottledCallBack = (arg: unknown) => void;

const useThrottle: (
  callback: Function,
  timeout: number
) => [ThrottledCallBack, CancelThrottleAction] = (callback, timeout) => {
  const isTimeout = useRef<boolean>(true);
  const timeoutInstance = useRef<NodeJS.Timeout | undefined>();

  const cancelAction: CancelThrottleAction = () => {
    timeoutInstance.current && clearTimeout(timeoutInstance.current);
  };

  const throttledRequest: ThrottledCallBack = (arg) => {
    if (isTimeout.current === false) return; //we're waiting on the existing timer
    callback(arg);
    isTimeout.current = false; // we are about to start a new timer
    setTimeout(() => {
      isTimeout.current = true;
    }, timeout);
  };

  return [throttledRequest, cancelAction];
};

export default useThrottle;
