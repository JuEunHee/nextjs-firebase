const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-screen overflow-hidden">
      <div
        className="
          flex flex-col
          justify-center
          flex-1
          w-3/5
          px-4
          py-12
          sm:px-6
          lg:flex-none lg:px-20
          xl:px-24
        "
      >
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
