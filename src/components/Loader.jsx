import { BarLoader } from 'react-spinners';

export default function Loader({ width = 400 }) {
  return (
    <div className="flex justify-center">
      <BarLoader
        color="#22c55e"
        height={5}
        speedMultiplier={0.8}
        width={width}
      />
    </div>
  );
}
