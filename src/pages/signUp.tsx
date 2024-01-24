import { Layout, Nav } from '../components';
import { SignUpForm } from '../components/forms/SignUpForm';

export const SignUpPage:React.FC = () => {
    return (
        <Layout>
            <Nav />
            <SignUpForm />
        </Layout>
    );
};
