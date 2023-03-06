import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: any, allowedRoles: any) => {
  const Auth = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const userRole = "admin"; // your code to get user role from API or local storage
      if (!allowedRoles.includes(userRole)) {
        router.push("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
