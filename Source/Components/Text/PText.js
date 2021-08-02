import React from 'react';
import { Text } from "react-native";
import { useTheme } from 'react-native-paper';

const PText = ({
  variant = 'body3',
  muted = false,
  textAlign = 'auto',
  style = {},
  children,
  onPress = null,
  numberOfLines = 900000,
  onTextLayout,
  ellipsizeMode = 'tail',
  testID = '',
  bold = false,
  light = false,
  isWhite = false,
  textColor = "text"
}) => {
  const { fontStyle, colors } = useTheme()

  return (
    <Text
      onPress={onPress}
      testID={testID}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
      ellipsizeMode={ellipsizeMode}
      style={{
        ...fontStyle[variant],
        color: isWhite ? "#FFFFFF" : muted ? colors.muted : colors[textColor],
        textAlign: textAlign,
        fontFamily: bold ? "Lato-Bold" : light ? "Lato-Light" : "Lato-Regular",
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default PText;