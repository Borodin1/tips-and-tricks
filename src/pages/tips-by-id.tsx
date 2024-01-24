import { RecentTipsAsside, TagsAsside, TipView } from '../features/tip-by-id';
import { Layout, Nav } from '../components';

export const TipByIdPage:React.FC = () => {
    return (
        <Layout >


            <section className = 'tip-view-layout'>
                <TipView />
                <section className = 'asides'>
                    <RecentTipsAsside />
                    <TagsAsside />
                </section>
            </section>
        </Layout>
    );
};
