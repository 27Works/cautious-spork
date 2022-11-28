import React, { useState } from "react";
import { useRouter } from "next/router";
import { FirebaseError } from "@firebase/util";
import { signIn, register } from "../untils/auth";
import styles from "../styles/SignIn.module.css";

const SignIn = (_props: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>();
  const router = useRouter();
  const redirectUrl = router.query.redirect as string;
  const unknownErrorMsg = "Unexpected Error Occurred. Please try again";

  const handleSignIn = async () => {
    setError(null);

    let isSignedIn = false;

    try {
      await signIn(email, password);
      isSignedIn = true;
    } catch (ex) {
      if (ex instanceof FirebaseError) {
        setError(ex.message);
      } else {
        setError(unknownErrorMsg);
      }
    }

    if (isSignedIn) {
      router.push(redirectUrl);
    }
  };

  const handleRegister = async () => {
    setError(null);

    try {
      await register(email, password);
    } catch (ex) {
      if (ex instanceof FirebaseError) {
        setError(ex.message);
      } else {
        setError(unknownErrorMsg);
      }
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.inputGroup}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email"}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Password"}
        />
      </div>
      <div className={styles.inputGroup}>
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default SignIn;
