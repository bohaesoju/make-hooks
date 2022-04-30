export function debounceFrame () {
  let nextFrameCallback = -1;
  return () => {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(callback)
  }
};
