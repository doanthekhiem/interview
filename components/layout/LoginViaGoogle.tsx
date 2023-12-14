import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";

const CustomGoogleLoginButton = ({ isLogin, setIsLogin }: any) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse?.access_token) {
        localStorage.setItem("access_token", tokenResponse.access_token);
        setIsLogin(true);
      }
    },
    onError: () => {
      console.log("Login Failed");
      // Xử lý khi đăng nhập thất bại
    },
  });

  const logout = () => {
    googleLogout();
    localStorage.removeItem("access_token");
    setIsLogin(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLogin(!!token);
  }, []);

  return (
    <div
      className="rounded-full col-span-1 bg-[#7BB8F1] h-10 text-white text-18-32 font-bold flex items-center justify-center cursor-pointer"
      onClick={() => (isLogin ? logout() : login())}
    >
      {isLogin ? "Log out" : "Log in"}
    </div>
  );
};

export default CustomGoogleLoginButton;
