import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save({
        className: 'skp-text-image',
    });

    return (
        <div {...blockProps}>
            <div className='skp-text-image__inner skp-page-container'>
                <InnerBlocks.Content/>
            </div>
        </div>
    );
}