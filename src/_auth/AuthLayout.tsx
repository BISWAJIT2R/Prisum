import { Outlet, Navigate } from "react-router-dom";

// import image
import { sideImg } from "../index";

const AuthLayout = () => {
  const isAuthenticate = false;

  return (
    <>
      {isAuthenticate ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex  flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img src={sideImg} alt="Wait a  minute" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"/>
        </>
      )}
    </>
  );
};

export default AuthLayout;
