// import { createElement as $, PureComponent } from "react";
// import {
//   Linking,
//   Platform,
//   StyleSheet,
//   Text,
//   TextProps,
//   View,
//   ViewProps,
// } from "react-native";

// function makeRenderers(onLayout?: ViewProps["onLayout"]) {
//   const renderers = {
//     root: (props: { children: any }) => $(View, { onLayout }, props.children),

//     paragraph:(props:{children:any})=>$(View,{style:styles.paragraphText},props.children)
//   };
// }

// const styles = StyleSheet.create({
//   text: {
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   heading1: {
//     fontWeight: '700',
//     color: Palette.text,
//     fontSize: Typography.fontSizeLarger,
//     lineHeight: Typography.lineHeightLarger,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   heading2: {
//     fontWeight: '700',
//     color: Palette.text,
//     fontSize: Typography.fontSizeLarge,
//     lineHeight: Typography.lineHeightLarge,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   heading3: {
//     fontWeight: '700',
//     color: Palette.text,
//     fontSize: Typography.fontSizeBig,
//     lineHeight: Typography.lineHeightBig,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   heading4: {
//     fontWeight: '700',
//     color: Palette.text,
//     fontSize: Typography.fontSizeNormal,
//     lineHeight: Typography.lineHeightNormal,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   heading5: {
//     fontWeight: '700',
//     color: Palette.text,
//     fontSize: Typography.fontSizeSmall,
//     lineHeight: Typography.lineHeightSmall,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   heading6: {
//     fontWeight: '700',
//     color: Palette.text,
//     fontSize: Typography.fontSizeTiny,
//     lineHeight: Typography.lineHeightTiny,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   paragraph: {
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     marginVertical: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   paragraphText: {
//     flexWrap: 'wrap',
//     overflow: 'visible',
//     color: Palette.text,
//     fontSize: Typography.fontSizeNormal,
//     lineHeight: Typography.lineHeightNormal,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   strong: {
//     fontWeight: '700',
//   },

//   em: {
//     fontStyle: 'italic',
//   },

//   strikethrough: {
//     textDecorationLine: 'line-through',
//   },

//   link: {
//     textDecorationLine: 'underline',
//   },

//   cypherlink: {
//     color: Palette.textBrand,
//     textDecorationLine: 'underline',
//   },

//   listItemText: {
//     color: Palette.text,
//     fontSize: Typography.fontSizeNormal,
//     lineHeight: Typography.lineHeightNormal,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   orderedBullet: {
//     fontWeight: '700',
//   },

//   inlineCode: {
//     backgroundColor: Palette.backgroundTextWeak,
//     fontFamily: Typography.fontFamilyMonospace,
//     color: Palette.textWeak,
//     ...Platform.select({
//       web: {
//         wordBreak: 'break-all',
//       },
//     }),
//   },

//   codeBlock: {
//     backgroundColor: Palette.backgroundTextWeak,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     padding: Dimensions.verticalSpaceSmall,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-all',
//       },
//     }),
//   },

//   codeText: {
//     fontWeight: '400',
//     color: Palette.textWeak,
//     fontSize: Typography.fontSizeSmall,
//     lineHeight: Typography.lineHeightSmall,
//     fontFamily: Typography.fontFamilyMonospace,
//     ...Platform.select({
//       web: {
//         wordBreak: 'break-all',
//       },
//     }),
//   },

//   blockquote: {
//     backgroundColor: Palette.backgroundTextWeak,
//     borderLeftWidth: 3,
//     borderLeftColor: Palette.backgroundTextWeakStrong,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     paddingLeft: Dimensions.horizontalSpaceSmall,
//     paddingRight: 1,
//     ...Platform.select({
//       web: {
//         fontFamily: Typography.fontFamilyReadableText,
//         wordBreak: 'break-word',
//       },
//     }),
//   },

//   horizontalLine: {
//     backgroundColor: Palette.textLine,
//     marginVertical: Dimensions.verticalSpaceSmall,
//     height: 2,
//   },
// });
