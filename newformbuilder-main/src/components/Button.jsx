export function Button({ children, type = 'button', ...props }) {
  return (
    <button 
      type={type}
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      {...props}
    >
      {children}
    </button>
  );
}
