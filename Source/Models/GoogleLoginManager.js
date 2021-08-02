// Model to everything related to Google SignIn
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { Response } from './Response';

class GoogleLoginManager {
  constructor() {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId: "391028644767-9eujgn5v6cn6gu2bjj6djaalaisbv818.apps.googleusercontent.com"
    });
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      return new Response(true, userInfo);
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return new Response(false, error, 'You cancelled the login');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        return new Response(false, error, 'Login is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        return new Response(
          false,
          error,
          'Google login not supported for your device',
        );
      } else {
        return new Response(false, error, err.message);
      }
    }
  };

  signOut = async () => {
    await GoogleSignin.revokeAccess()
    return await GoogleSignin.signOut()
  };
}

export default new GoogleLoginManager()