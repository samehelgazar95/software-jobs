import { BarLoader } from 'react-spinners';

export default function Loader({ width = 400 }) {
  return (
    <div className="flex justify-center my-4">
      <BarLoader color="#22c55e" height={5} width={width} />
    </div>
  );
}
