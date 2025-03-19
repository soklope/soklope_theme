import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    const blockProps = useBlockProps({
        className: 'skp-header',
    });

    return (
        <div {...blockProps}>
            <div className='skp-header__inner skp-page-container'>
                <InnerBlocks
                    renderAppender={InnerBlocks.ButtonBlockAppender}
                    allowedBlocks={[
                        "core/site-logo",
                        "core/navigation",
                        "create-block/burger",
                    ]}
                />
            </div>
        </div>
    );
}