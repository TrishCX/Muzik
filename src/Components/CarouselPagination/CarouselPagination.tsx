import {
  View,
  Text,
  type StyleProp,
  type ViewStyle,
  Dimensions,
} from "react-native";
import React from "react";
import { Pagination } from "react-native-snap-carousel";

type CarouselPaginationProps = {
  activeDotIndex: number;
  length: number;
  inActiveDotStyles?: StyleProp<ViewStyle>;
};

const CarouselPagination: React.FC<CarouselPaginationProps> = ({
  activeDotIndex,
  length,
  ...props
}: CarouselPaginationProps): JSX.Element => {
  const { width, height } = Dimensions?.get("window");

  return (
    <Pagination
      activeDotIndex={activeDotIndex}
      dotsLength={length}
      containerStyle={{}}
      dotStyle={{
        borderRadius: 5,
        backgroundColor: "rgba(255, 255, 255, 0.92)",
      }}
      inactiveDotStyle={{
        ...(props.inActiveDotStyles as ViewStyle),
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

export default CarouselPagination;
