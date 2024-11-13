import React from 'react';

import {
  type FlexStyle,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import TextAncestor from 'react-native/Libraries/Text/TextAncestor';

import { validateStyleProps } from '../utils/valid-style';

type Style = Omit<
  ViewStyle,
  | 'justifyContent'
  | 'width'
  | 'height'
  | 'alignItems'
  | 'flexDirection'
  | 'margin'
  | 'marginBottom'
  | 'marginTop'
  | 'marginLeft'
  | 'marginRight'
  | 'marginVertical'
  | 'marginHorizontal'
  | 'padding'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'backgroundColor'
  | 'direction'
>;

export interface IStyle extends Style {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
  justify: FlexStyle['justifyContent'];
  align: FlexStyle['alignItems'];
  background: ViewStyle['backgroundColor'];
  flexDirection: FlexStyle['flexDirection'];
  center?: boolean;
  w: ViewStyle['width'];
  h: ViewStyle['height'];
  m: ViewStyle['margin'];
  mt: ViewStyle['marginTop'];
  mb: ViewStyle['marginBottom'];
  ml: ViewStyle['marginLeft'];
  mr: ViewStyle['marginRight'];
  my: ViewStyle['marginVertical'];
  mx: ViewStyle['marginHorizontal'];
  p: ViewStyle['padding'];
  pt: ViewStyle['paddingTop'];
  pb: ViewStyle['paddingBottom'];
  pl: ViewStyle['paddingLeft'];
  pr: ViewStyle['paddingRight'];
  py: ViewStyle['paddingVertical'];
  px: ViewStyle['paddingHorizontal'];
  borderBottom: number;
  borderTop: number;
}

export interface BoxProps extends Omit<ViewProps, 'children'>, Partial<IStyle> {}

type Box = View;

const ViewBoxComponent: React.ForwardRefRenderFunction<View, BoxProps> = ({...props}, ref) => {
  const styleObj = React.useMemo(() => validateStyleProps(props), [props]);
  const overideStyle: {view: ViewStyle} = {
    view: {
      ...styleObj,
      width: props.w,
      height: props.h,
      backgroundColor: props.background,
      justifyContent: props.center ? 'center' : props.justify,
      alignItems: props.center ? 'center' : props.align,
      margin: props.m,
      marginTop: props.mt,
      marginBottom: props.mb,
      marginRight: props.mr,
      marginLeft: props.ml,
      marginVertical: props.my,
      marginHorizontal: props.mx,
      padding: props.p,
      paddingTop: props.pt,
      paddingBottom: props.pb,
      paddingLeft: props.pl,
      paddingRight: props.pr,
      paddingVertical: props.py,
      paddingHorizontal: props.px,
      borderBottomLeftRadius: props.borderBottom || props.borderBottomLeftRadius,
      borderBottomRightRadius: props.borderBottom || props.borderBottomRightRadius,
      borderTopLeftRadius: props.borderTop || props.borderTopLeftRadius,
      borderTopRightRadius: props.borderTop || props.borderTopRightRadius,
    },
  };

  const filterStyle = Object.entries(overideStyle.view)
    .filter(([_key, value]) => value !== undefined)
    .reduce((acc, [key, value]) => {
      // @ts-ignore
      acc[key] = value;
      return acc;
    }, {});

  return (
    <TextAncestor.Provider value={false}>
      <ViewNativeComponent {...props} style={[filterStyle, props.style]} ref={ref} />
    </TextAncestor.Provider>
  );
};

const Box = React.forwardRef(ViewBoxComponent);
Box.displayName = 'VBox';

export {Box};
