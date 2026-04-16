import Ionicons from '@expo/vector-icons/Ionicons';
import { useCallback } from 'react';
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type SocialLink = {
  url: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    url: 'https://github.com/amrobollad',
    icon: 'logo-github',
    label: 'GitHub',
  },
  {
    url: 'https://sd.linkedin.com/in/amro-easa-45b79b223',
    icon: 'logo-linkedin',
    label: 'LinkedIn',
  },
  {
    url: 'https://x.com/AmroEasa',
    icon: 'logo-twitter',
    label: 'X',
  },
];

type QRCardProps = {
  name: string;
  role: string;
  url: string;
};

export function QRCard({ name, role, url }: QRCardProps) {
  const openUrl = useCallback(async (href: string) => {
    try {
      await Linking.openURL(href);
    } catch {
      // URL could not be opened (e.g. no browser)
    }
  }, []);

  const displayHost = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <View style={styles.card}>
      <View style={styles.accentBar} />
      <View style={styles.cardBody}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>

        <View style={styles.qrWrapper}>
          <QRCode value={url} size={200} />
        </View>

        <Pressable
          accessibilityRole="link"
          accessibilityLabel={`Open ${displayHost} in browser`}
          onPress={() => openUrl(url)}
          style={({ pressed }) => [styles.primaryLink, pressed && styles.primaryLinkPressed]}>
          <Ionicons name="link" size={18} color="#5c4033" />
          <Text style={styles.primaryLinkText}>{displayHost}</Text>
          <Ionicons name="open-outline" size={18} color="#8b6914" />
        </Pressable>

        <View style={styles.divider} />

        <Text style={styles.linksHeading}>Connect</Text>
        <View style={styles.socialRow}>
          {SOCIAL_LINKS.map((item) => (
            <Pressable
              key={item.url}
              accessibilityRole="link"
              accessibilityLabel={`Open ${item.label}`}
              onPress={() => openUrl(item.url)}
              style={({ pressed }) => [
                styles.socialButton,
                pressed && styles.socialButtonPressed,
              ]}>
              <Ionicons name={item.icon} size={26} color="#3d2914" />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fdfbf7',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(92, 64, 51, 0.12)',
    ...Platform.select({
      ios: {
        shadowColor: '#2d1f14',
        shadowOpacity: 0.12,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 10 },
      },
      android: {
        elevation: 6,
      },
    }),
  },
  accentBar: {
    height: 4,
    width: '100%',
    backgroundColor: '#6b4423',
  },
  cardBody: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 22,
    paddingHorizontal: 22,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1c1410',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  role: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#5c534c',
    textAlign: 'center',
  },
  qrWrapper: {
    marginTop: 22,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(92, 64, 51, 0.08)',
  },
  primaryLink: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: '#f5ebe0',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(107, 68, 35, 0.25)',
    maxWidth: '100%',
  },
  primaryLinkPressed: {
    opacity: 0.85,
    backgroundColor: '#efe2d4',
  },
  primaryLinkText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#5c4033',
    flexShrink: 1,
  },
  divider: {
    marginTop: 22,
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(92, 64, 51, 0.12)',
  },
  linksHeading: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#8a7f72',
    textTransform: 'uppercase',
  },
  socialRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(92, 64, 51, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonPressed: {
    backgroundColor: '#f0e6dc',
    borderColor: 'rgba(107, 68, 35, 0.35)',
  },
});
