import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'skp-hero',
    });

    const { backgroundImage } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Background Image', 'skpblocks')}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ backgroundImage: { url: media.url, id: media.id, alt: media.alt } })}
                            allowedTypes={['image']}
                            value={backgroundImage.id}
                            render={({ open }) => (
                                <Button onClick={open} variant="secondary">
                                    {backgroundImage.url ? __('Change Image', 'custom-background-block') : __('Select Image', 'custom-background-block')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}
                style={{ 
                    backgroundImage: backgroundImage.url ? `url(${backgroundImage.url})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '300px'
                }}
            >
                {!backgroundImage.url && (
                    <p style={{ textAlign: 'center', padding: '20px' }}>
                        {__('Select a background image', 'custom-background-block')}
                    </p>
                )}
                <InnerBlocks
                    renderAppender={InnerBlocks.ButtonBlockAppender}
                    allowedBlocks={[
                        "skpblocks/title-text-button",
                    ]}
                    template={[
                        ['skpblocks/title-text-button'], 
                    ]}
                />
            </div>
        </>
    );
}