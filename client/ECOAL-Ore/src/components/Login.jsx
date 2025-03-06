import { useState } from "react";
import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_HOST, SUBMIT_USERS_LOGIN } from "../config/global_constants";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${SERVER_HOST}${SUBMIT_USERS_LOGIN}`, {
                email,
                password,
            });

            if(response.status !== 200) {
                setErrorMessage("Login failed. Please try again.")
                return
            }
            document.cookie="access_token="+response.data.access_token;
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage("Login failed. Please try again.");
        }
        navigate("/")
    };

    return (
        <>
            <div className={styles.logo}>
                <img src="/EXP.png" alt="Logo" />
            </div>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>E-mail / Username</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.rememberMe}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className={styles.checkbox}
                            />
                            Remember me
                        </label>
                    </div>

                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}

                    <button type="submit" className={styles.button}>
                        Log In
                    </button>

                    <div className={styles.signupLink}>
                        <Link to="/SignUp">Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
