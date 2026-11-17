import { m, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <m.div className="scroll-progress-bar" style={{ scaleX: scrollYProgress }} />
    </div>
  );
};

export default ScrollProgress;
