import { StyleSheet, View } from 'react-native';

import { QRCard } from '@/components/qr-card';

type QRScreenProps = {
  url: string;
};

export function QRScreen({ url }: QRScreenProps) {
  return (
    <View style={styles.screen}>
      <QRCard
        name="Samir Ibrahim"
        role="Full Stack Developer | Python | Web & Data Systems | Building Scalable Solutions"
        url={url}
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
