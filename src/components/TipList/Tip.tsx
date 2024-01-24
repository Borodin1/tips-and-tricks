import { Link } from 'react-router-dom';
import { ITipModel } from '../../types/TipModel';
// Helpers
import { getTagIcon } from '../../helpers/getTagIcon';

// Icons

export const Tip: React.FC<IPropTypes> = (props) => {
    const {
        created, title, preview, author, tag, id,
    } = props;

    const TagIcon = getTagIcon(tag.name);

    return (
        <article>
            <header>
                <TagIcon />
                <h1>{ title }</h1>
            </header>
            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span>
                        🚀 { created }
                        </span>
                        <span>
                        👨🏼‍🚀 Автор: { author }
                        </span>
                    </div>
                </time>
                <h2>{ title }</h2>
                <p>{ preview }</p>
            </main>
            <footer>
                <Link to = { id }>📖 &nbsp; Читать полностью &rarr;</Link>
            </footer>
        </article>
    );
};


interface IPropTypes extends ITipModel {

}
