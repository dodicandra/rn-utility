import { Box, type BoxProps, type IStyle as BoxStyle } from './components/box';
import { AnimatedBox } from './components/box-animated';
import { BoxAnimatedLayout } from './components/box-animated-layout';
import { validateStyleProps, validStyle } from './utils/valid-style';

export { Box, validStyle, validateStyleProps, AnimatedBox, BoxAnimatedLayout }
export type { BoxProps, BoxStyle }
