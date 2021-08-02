import React from 'react';
import { Text } from "react-native";
import { useTheme } from 'react-native-paper';

const fontStyles = {
  h1: {
    fontSize: 34,
    lineHeight: 42,
  },
  h2: {
    fontSize: 30,
    lineHeight: 38,
  },
  h3: {
    fontSize: 24,
    lineHeight: 30,
  },
  h4: {
    fontSize: 22,
    lineHeight: 28,
  },
  h5: {
    fontSize: 20,
    lineHeight: 26,
  },
  h6: {
    fontSize: 18,
    lineHeight: 26,
  },
};

const Title = ({
  style = {},
  variant = 'h6',
  textAlign = 'auto',
  children,
  numberOfLines = 99999999,
  bold = false,
  textColor = "text",
  isWhite = false,
  light = false
}) => {
  const { colors } = useTheme()

  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontFamily: bold ? "Lato-Bold" : light ? "Lato-Light" : "Lato-Regular",
        textAlign,
        color: isWhite ? colors.background : colors[textColor],
        ...fontStyles[variant],
        ...style,
      }}>
      {children}
    </Text>
  )
};

export default Title;
