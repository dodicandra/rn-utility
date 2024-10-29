import React from 'react';

import Animated from 'react-native-reanimated';

import type { BoxProps } from './box';
import { AnimatedBox } from './box-animated';

type BoxAnimatedLayoutProps = Animated.AnimateProps<BoxProps>;

const BoxAnimatedLayout: React.FC<BoxAnimatedLayoutProps> = ({ children, layout, ...props }) => {
  return (
    <React.Fragment>
      {/*
        @ts-ignore  */}
      {React.Children.map(children, (child) => (
        <AnimatedBox {...props} layout={layout}>
          {child}
        </AnimatedBox>
      ))}
    </React.Fragment>
  );
};

export { BoxAnimatedLayout };
