import LauncherApp from "@/components/apptest/LauncherApp";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <LauncherApp />
    </Layout>
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
