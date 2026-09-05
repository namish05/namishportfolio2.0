import React from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ mousePosition, cursorType, cursorText, isTouchDevice }) {
  if (isTouchDevice) return null;

  const isProject = cursorType === 'project';
  const isExplore = cursorType === 'explore';
  const isPointer = cursorType === 'pointer';
  const isText = isProject || isExplore || Boolean(cursorText);

  const getWidth = () => {
    if (isText) return 110;
    if (isPointer) return 40;
    return 14;
  };

  const getHeight = () => {
    if (isText) return 110;
    if (isPointer) return 40;
    return 14;
  };

  const getDisplayContent = () => {
    if (cursorText) return cursorText;
    if (isProject) return 'VIEW ↗';
    if (isExplore) return 'EXPLORE';
    return null;
  };

  const size = getWidth();

  return (
    <>
      {/* Main Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          width: size,
          height: size,
          backgroundColor: isText ? '#CCFF00' : isPointer ? 'rgba(255, 255, 255, 0.2)' : '#FFFFFF',
          border: isPointer ? '1px solid rgba(255, 255, 255, 0.6)' : 'none',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      >
        {isText && (
          <span className="text-black font-display font-bold text-[11px] tracking-wider uppercase text-center px-2">
            {getDisplayContent()}
          </span>
        )}
      </motion.div>

      {/* Tiny Center Dot for precision */}
      {!isText && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 bg-lime rounded-full"
          style={{
            transform: `translate3d(${mousePosition.x - 3}px, ${mousePosition.y - 3}px, 0)`,
            transition: 'transform 0.05s linear',
          }}
        />
      )}
    </>
  );
}
