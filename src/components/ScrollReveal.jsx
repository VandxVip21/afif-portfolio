import { m, useReducedMotion } from 'framer-motion';
import scrollRevealVariants from './scrollRevealVariants';

const ScrollReveal = ({
  as = 'div',
  variant = 'heading',
  staggerChild = false,
  viewportAmount = 0.15,
  children,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = m[as] ?? m.div;
  const isStaggerChild = staggerChild && !shouldReduceMotion;
  const revealProps = isStaggerChild
    ? { variants: scrollRevealVariants[variant] }
    : {
        variants: scrollRevealVariants[variant],
        initial: shouldReduceMotion ? false : 'hidden',
        animate: shouldReduceMotion ? 'visible' : undefined,
        whileInView: shouldReduceMotion ? undefined : 'visible',
        viewport: { once: false, amount: viewportAmount }
      };

  return (
    <MotionElement
      {...props}
      {...revealProps}
    >
      {children}
    </MotionElement>
  );
};

export default ScrollReveal;
