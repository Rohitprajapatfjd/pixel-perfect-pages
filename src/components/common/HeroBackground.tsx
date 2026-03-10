import Threads from '@/components/animations/Threads';
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-blue-600">
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <Threads
        amplitude={3}
        distance={0.7}
        enableMouseInteraction
        color={[1,1,1]}
      />
    </div>
    </div>
  );
};

export default HeroBackground;
