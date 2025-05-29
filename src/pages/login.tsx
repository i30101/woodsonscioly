/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 15 May 2025
 */


const login: React.FC = () => (
    <div className={"login-container"}>
        <div className="login-header">
            <h1>Login</h1>
            <p>Access restricted to team members only.</p>
        </div>
        <div className="login-form">
            <form action="/api/login" method="POST">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
            </form>
        </div>
    </div>
)

export default login;