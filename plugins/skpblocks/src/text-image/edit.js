import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    const blockProps = useBlockProps({
        className: 'skp-text-image',
    });

    return (
        <div {...blockProps}>
            <div className='skp-text-image__inner skp-page-container'>
                <InnerBlocks
                    renderAppender={InnerBlocks.ButtonBlockAppender}
                    allowedBlocks={[
                        "core/image",
                        "skpblocks/title-text-button"
                    ]}
                    template={[
                        ['core/image'], 
                        ['skpblocks/title-text-button'] 
                    ]}
                />
            </div>
        </div>
    );
}