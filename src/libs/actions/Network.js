import Onyx from 'react-native-onyx';
import ONYXKEYS from '../../ONYXKEYS';

/**
 * @param {Boolean} isOffline
 */
function setIsOffline(isOffline) {
    Onyx.merge(ONYXKEYS.NETWORK, {isOffline});
}

/**
 * Test tool that will fail all network requests when enabled
 * @param {Boolean} shouldFailAllRequests
*/

export {
    setIsOffline,
    setShouldFailAllRequests,
};
