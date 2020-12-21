import { Alert } from 'react-native';

interface ShowAlert {
  alertTitle: string;
  alertMessage?: string;
}

export const showAlert = ({ alertTitle, alertMessage }: ShowAlert) => {
  Alert.alert(alertTitle, alertMessage);
};
