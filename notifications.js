import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

export const NotificationService = {
  // Request permissions
  async requestPermissions() {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  },

  // Schedule a notification
  async scheduleNotification(title, body, seconds = 5) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title || 'Movie Explorer',
        body: body || 'Check out new movies!',
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: { seconds },
    });
  },

  // Get push token
  async getPushToken() {
    const projectId = 'your-expo-project-id'; // Replace with your Expo project ID
    try {
      const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
      console.log('Push Token:', token);
      return token;
    } catch (error) {
      console.error('Error getting push token:', error);
      return null;
    }
  },

  // Configure notification handler
  configureNotifications() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  },

  // Test notification
  async sendTestNotification() {
    await this.scheduleNotification(
      'Test Notification',
      'This is a test notification from Movie Explorer!',
      2
    );
    return 'Notification sent successfully!';
  }
};

// Configure on app start
NotificationService.configureNotifications();
