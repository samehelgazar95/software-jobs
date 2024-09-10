export default function Error({ children }) {
  return (
    <div className="bg-red-300 w-3/4 text-center font-semibold text-xl py-4 mx-auto text-slate-800 rounded-xl">
      <h2>{children}</h2>
    </div>
  );
}
