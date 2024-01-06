import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingStack } from "../OnBoardingStack/OnBoardingStack";
import { AppStack } from "../AppStack/AppStack";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeStack: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="AppStack" component={AppStack} />
        {/* <Screen name="OnBoarding" component={OnBoardingStack} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export { HomeStack };
