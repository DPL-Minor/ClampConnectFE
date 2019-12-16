import React from 'react';
import { Text, Button, View } from 'react-native';



import { createAppContainer, createSwitchNavigator, ActivityIndicator, StatusBar, AsyncStorage } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

// auth stack screens
import AuthLanding from './scenes/Authentication/AuthLandingScreen';
import CreateAccount from './scenes/Authentication/CreateAccountScreen';
import ForgotPassword from './scenes/Authentication/ForgotPasswordScreen';
import ResetPassword from './scenes/Authentication/ResetPasswordScreen';
import SignIn from './scenes/Authentication/SignInScreen';


// main Tabs
import Home from './scenes/MainTabs/HomeScreen';
import NFC from './scenes/MainTabs/NFCScreen';
import Map from './scenes/MainTabs/MapScreen';
import ClampManagement from './scenes/MainTabs/ClampManagementScreen';

const AuthStack = createStackNavigator({
  Landing: {
    screen: AuthLanding,
    navigationOptions: {
      headerTitle: "Landing",
      header: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  }
});


class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // TODO: pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={0} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `md-home`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  }
  else if (routeName === 'NFC') {
    iconName = `md-qr-scanner`;
  }
  else if (routeName === 'Map') {
    iconName = `md-map`;
  }
  else if (routeName === 'Clamps') {
    iconName = `md-options`;
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const AppTabs = createBottomTabNavigator(
  {
    Home: { screen: Home },
    NFC: { screen: NFC },
    Map: { screen: Map },
    Clamps: { screen: ClampManagement }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'darkcyan',
      inactiveTintColor: 'lightgray',
    },
  }
)

const MainSwitch = createSwitchNavigator(
  {
    App: AppTabs,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(
  MainSwitch
);
