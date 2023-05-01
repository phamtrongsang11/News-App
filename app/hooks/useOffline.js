import { useNetInfo } from '@react-native-community/netinfo';

function useOffline() {
	const netInfo = useNetInfo();
	return netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;
}

export default useOffline;
