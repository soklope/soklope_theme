<?php
/**
 * Plugin Name:       Skpblocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       skpblocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_skpblocks_block_init() {
	register_block_type( __DIR__ . '/build/header' );
	register_block_type( __DIR__ . '/build/footer' );
	register_block_type( __DIR__ . '/build/burger' );
	register_block_type( __DIR__ . '/build/text-image' );
	register_block_type( __DIR__ . '/build/title-text-button' );
	register_block_type( __DIR__ . '/build/hero' );
}
add_action( 'init', 'create_block_skpblocks_block_init' );

// Hook to add a custom block category
add_filter( 'block_categories_all', function( $categories ) {
    array_unshift( $categories, array(
        'slug'  => 'skpblocks',
        'title' => 'Skpblocks'
    ));

    return $categories;
}, 5 ); // Lower priority *might* help if other plugins are modifying categories

function enqueue_hamburger_styles() {
    wp_enqueue_style(
        'hamburgers-css',
        'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css',
        array(),
        '1.1.3'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_hamburger_styles');

