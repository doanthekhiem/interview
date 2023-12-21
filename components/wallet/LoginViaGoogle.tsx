import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
const CustomGoogleLoginButton = ({ isLogin, setIsLogin }: any) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse?.access_token) {
        setCookie("access_token", tokenResponse.access_token); // Lưu vào cookie
        setIsLogin(true);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const logout = () => {
    googleLogout();
    deleteCookie("access_token"); // Xóa cookie
    setIsLogin(false);
  };

  useEffect(() => {
    const token = getCookie("access_token");
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
