import { useEffect, useRef } from 'react';

export default function MoneyRain() {
  const containerRef = useRef(null);

  useEffect(() => {
    function addDollar() {
      if (!containerRef.current) return;

      // 1. The Outer Container (Handles the falling down)
      const fallContainer = document.createElement('div');
      fallContainer.className = 'absolute text-emerald-500 font-bold opacity-70';
      fallContainer.style.left = Math.random() * 100 + 'vw';
      fallContainer.style.top = '-100px';
      fallContainer.style.fontSize = 20 + Math.random() * 40 + 'px';
      fallContainer.style.animation = `fall ${2 + Math.random() * 3}s linear`;

      // 2. The Inner Element (Handles the spinning)
      const spinIcon = document.createElement('span');
      spinIcon.innerText = '$';
      // Inline-block is required for CSS transforms to work on spans!
      spinIcon.style.display = 'inline-block'; 
      spinIcon.style.animation = `rotate ${1 + Math.random() * 2}s linear infinite`;

      // 3. Put the spinning dollar inside the falling container
      fallContainer.appendChild(spinIcon);
      containerRef.current.appendChild(fallContainer);

      // Clean up the DOM so the browser doesn't crash after 5 minutes
      setTimeout(() => {
        fallContainer.remove();
      }, 5000);
    }

    const intervalId = setInterval(addDollar, 100);
    return () => clearInterval(intervalId);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
}