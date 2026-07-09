import { useEffect, useState } from 'react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

export const useGetCallById = (id: string | string[] | undefined) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();
  const callId = Array.isArray(id) ? id[0] : id;

  useEffect(() => {
    if (!client || !callId) {
      setIsCallLoading(false);
      return;
    }

    let cancelled = false;

    const loadCall = async () => {
      setIsCallLoading(true);

      try {
        const callInstance = client.call('default', callId);
        await callInstance.get();

        if (!cancelled) setCall(callInstance);
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to load call:', error);
          setCall(undefined);
        }
      } finally {
        if (!cancelled) setIsCallLoading(false);
      }
    };

    loadCall();

    return () => {
      cancelled = true;
    };
  }, [client, callId]);

  return { call, isCallLoading };
};
