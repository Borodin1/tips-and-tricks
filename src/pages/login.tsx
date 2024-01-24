import { Layout, Nav } from '../components';
import { LoginForm } from '../components/forms/LoginForm';

export const LoginPage: React.FC = () => {
    return (
        <Layout >
            <Nav />
            <LoginForm />
        </Layout>
    );
};
