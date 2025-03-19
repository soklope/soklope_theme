import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save({
        className: 'skp-burger',
    });

    const { menuItems, isOpen } = attributes;

    return (
        <div {...blockProps}>
            <button className={`hamburger hamburger--spin ${isOpen ? 'is-active' : ''}`}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <nav className="burger-menu">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
