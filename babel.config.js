module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: [
        './Source',
      ],
      "alias": {
        "@navigators": ["./Source/Navigators/"],
        "@components": ["./Source/Components/"],
        "@models": ["./Source/Models/"],
        "@services": ["./Source/Services/"],
        "@images": ["./Source/Resources/Images/"],
        "@icons": ["./Source/Resources/Icons/"],
        "@data": ["./Source/Resources/Data/"],
        "@fonts": ["./Source/Resources/Fonts/"],
        "@helpers": ["./Source/Helpers/"],
        "@redux": ["./Source/Redux/"],
        "@themes": ["./Source/Themes/"],
        "@screens": ["./Source/Screens/"],
        "@localization": ["./Source/Localization/"]
      }
    }],
  ]
};
