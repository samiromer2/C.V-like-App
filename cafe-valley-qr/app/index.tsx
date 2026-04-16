import { StyleSheet, View } from 'react-native';

import { QRCard } from '@/components/qr-card';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <QRCard
        name="Amro Mohamed Easa"
        role="Software Developer /Data Analyst/Accountant/Trainer"
        url="https://cafe-valley.com/"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f3f4f6',
  },
});
