// not-found.tsx  is special name same as error.tsx,page.tsx

// it doesnt matter what name you provide to this component
export default function NotFound() {
  return (
    <div className="text-4xl flex justify-center items-center gap-5 m-5">
      <span className="text-red-600">404</span>
      User not found
    </div>
  );
}
