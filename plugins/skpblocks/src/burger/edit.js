import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import 'hamburgers/dist/hamburgers.min.css';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'skp-burger',
    });
    const { menuItems, isOpen } = attributes;
    
    const [menuOpen, setMenuOpen] = useState(isOpen);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setAttributes({ isOpen: !menuOpen });
    };
    
    const updateMenuItem = (index, key, value) => {
        const newMenu = [...menuItems];
        newMenu[index][key] = value;
        setAttributes({ menuItems: newMenu });
    };

    const addMenuItem = () => {
        setAttributes({ menuItems: [...menuItems, { label: 'New Item', url: '#' }] });
    };

    const removeMenuItem = (index) => {
        const newMenu = menuItems.filter((_, i) => i !== index);
        setAttributes({ menuItems: newMenu });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Menu Items', 'skpblocks')} initialOpen={true}>
                    {menuItems.map((item, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <TextControl
                                label={__('Label', 'skpblocks')}
                                value={item.label}
                                onChange={(value) => updateMenuItem(index, 'label', value)}
                            />
                            <TextControl
                                label={__('URL', 'skpblocks')}
                                value={item.url}
                                onChange={(value) => updateMenuItem(index, 'url', value)}
                            />
                            <Button isDestructive onClick={() => removeMenuItem(index)}>
                                {__('Remove', 'skpblocks')}
                            </Button>
                        </div>
                    ))}
                    <Button variant="primary" onClick={addMenuItem}>
                        {__('Add Menu Item', 'skpblocks')}
                    </Button>
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <button 
                    className={`hamburger hamburger--spin ${menuOpen ? 'is-active' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                {menuOpen && (
                    <nav className="burger-menu">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
}
