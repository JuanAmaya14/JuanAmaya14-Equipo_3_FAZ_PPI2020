
import SmsListener from 'react-native-android-sms-listener'

 
SmsListener.addListener(message => {
console.info(message);
});
