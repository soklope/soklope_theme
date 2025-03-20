import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save({
        className: 'skp-title-text-button',
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content/>
        </div>
    );
}