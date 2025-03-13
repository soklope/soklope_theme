import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save({
        className: 'skp-header',
    });

    return (
        <div {...blockProps}>
            <div className='skp-header__inner skp-page-container'>
                <InnerBlocks.Content/>
            </div>
        </div>
    );
}