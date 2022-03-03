import styles from "../styles/Login.module.css";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import spotifyIconGreen from "../images/spotify-icon-green.svg";

const Login = ({ providers }) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.id} className={styles.loginContainer}>
          <Image src={spotifyIconGreen} width="120px" height="120px" />
          <button style={{ color: "white" }} onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
