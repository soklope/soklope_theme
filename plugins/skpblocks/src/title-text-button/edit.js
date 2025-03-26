import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    const blockProps = useBlockProps({
        className: 'skp-title-text-button',
    });

    return (
        <div {...blockProps}>
            <div className='skp-title-text-button__inner skp-page-container'>
                <InnerBlocks
                    renderAppender={InnerBlocks.ButtonBlockAppender}
                    allowedBlocks={[
                        "core/heading",
                        "core/paragraph",
                        "core/button",
                    ]}
                    template={[
                        ['core/heading'], 
                        ['core/paragraph'],
                        ['core/button']
                    ]}
                />
            </div>
        </div>
    );
}