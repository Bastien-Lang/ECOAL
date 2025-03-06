import { useState } from 'react';
import styles from '../css/Login.module.css';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
    };
    
    return (
        <>
        
            <div className={styles.logo}>
                <img src="../../public/EXP.png" alt="Logo" />
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
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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