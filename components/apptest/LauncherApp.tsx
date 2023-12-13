const LauncherApp = () => {
  return (
    <div className="m-auto max-w-7xl flex gap-10 pt-[200px] flex-col h-full">
      <div className="text-white text-28-32 font-bold">
        1 Nút ‘connect wallet': connect with Petra wallet (ví trên blockchain network Aptos) <br />
        2 Nút ‘Log in’: allow users to log in using Google
        <br />
        3Nút ‘Launch App': once users log in, send them to the #test2 page (this page). if users haven't logged in,
        don't let them see the second page
        <br />4 Photoshop phần white part out ‘testX’ logo và dùng chữ test X {`=>`} cho phần ‘Explore and Earn on
        testX’ <br />
        5 The next step is to deploy your work on vercel. <br />
        6 Block access for IP from Japan.
        <br />
        7 Share the vercel link along with your code (github link to the repo).
        <br />
      </div>
      <div className="text-white text-28-32 font-bold">CONGRATS ON PASSING THE CODING INTERVIEW!</div>
    </div>
  );
};

export default LauncherApp;
