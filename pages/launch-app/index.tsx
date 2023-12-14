import LauncherApp from "@/components/apptest/LauncherApp";

export default function Home() {
  return (
    <main>
      <LauncherApp />
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const { req, resolvedUrl } = context;
  const accessToken = req?.cookies?.access_token;
  if (!accessToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      isLoggedIn: !!accessToken,
    },
  };
}
