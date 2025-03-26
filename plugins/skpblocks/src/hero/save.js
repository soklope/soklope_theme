import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save({
        className: 'skp-hero',
    });

    const { backgroundImage } = attributes;

    return (
        <div {...blockProps}
            style={{ 
                backgroundImage: backgroundImage.url ? `url(${backgroundImage.url})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
            }}
        >
            <InnerBlocks.Content/>
        </div>
    );
}