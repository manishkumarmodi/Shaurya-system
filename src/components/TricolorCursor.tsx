import { useEffect, useRef, useState } from 'react';

const NUM_SEGMENTS = 12;
const COLORS = ["#ff9933", "#ffffff", "#138808"];

const TricolorCursor = () => {
  const [positions, setPositions] = useState(
    Array(NUM_SEGMENTS).fill({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  );
  const [isClicking, setIsClicking] = useState(false);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      setPositions(prev => {
        const newPositions = [...prev];
        // Head follows mouse
        newPositions[0] = {
          x: mouseRef.current.x,
          y: mouseRef.current.y
        };
        // Each segment follows the previous one
        for (let i = 1; i < NUM_SEGMENTS; i++) {
          const prevSeg = newPositions[i - 1];
          const currSeg = newPositions[i];
          const dx = prevSeg.x - currSeg.x;
          const dy = prevSeg.y - currSeg.y;
          newPositions[i] = {
            x: currSeg.x + dx * 0.3,
            y: currSeg.y + dy * 0.3
          };
        }
        return newPositions;
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`tricolor-cursor-segment${isClicking ? ' clicking' : ''}`}
          style={{
            left: pos.x - 12,
            top: pos.y - 12,
            background: COLORS[i % COLORS.length],
            opacity: 1 - i / NUM_SEGMENTS,
            zIndex: 9999,
            position: 'fixed',
            width: 24,
            height: 24,
            borderRadius: '50%',
            pointerEvents: 'none',
            boxShadow: i === 0 ? '0 0 8px 2px #fff7' : 'none',
            border: i === 0 ? '2px solid #fff' : 'none',
            transition: 'transform 0.1s',
          }}
        />
      ))}
    </>
  );
};

export default TricolorCursor;