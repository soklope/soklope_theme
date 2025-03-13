<?php

function scripts() {
    // Register and enqueue the main stylesheet
    wp_register_style('style', get_template_directory_uri() . '/dist/css/app.css', [], filemtime(get_template_directory() . '/dist/css/app.css'), 'all');
    wp_enqueue_style('style');

    // Enqueue jQuery correctly (WordPress includes jQuery by default)
    wp_enqueue_script('jquery');

    // Register and enqueue the main script
    wp_register_script('app', get_template_directory_uri() . '/dist/js/app.js', ['jquery'], filemtime(get_template_directory() . '/dist/js/app.js'), true); // Set to true for footer
    wp_enqueue_script('app');
}
add_action('wp_enqueue_scripts', 'scripts');

// Full Site Editing Support
function mytheme_supports_fse() {
    add_theme_support('block-templates');
    add_theme_support('full-site-editing');
}
add_action('after_setup_theme', 'mytheme_supports_fse');

function mytheme_register_block_templates() {
    // Register block templates correctly
    $template_files = array(
        'index'    => 'Index Template',
        'single'   => 'Single Post Template',
        'archive'  => 'Archive Template',
        'page'     => 'Page Template',
    );

    foreach ($template_files as $template => $name) {
        $template_path = get_template_directory() . '/templates/' . $template . '.html';
        if (file_exists($template_path)) {
            register_block_template($template . '.html');
        }
    }
}

add_action('after_setup_theme', 'mytheme_register_block_templates');

// Register Widget Areas
function mytheme_register_widget_areas() {
    register_sidebar(array(
        'name'          => 'Footer Widgets',
        'id'            => 'footer-widgets',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2>',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'mytheme_register_widget_areas');

// Add theme support for custom logo
add_theme_support('custom-logo');

// Add theme support for menus
add_theme_support('menus');

// Register navigation menus
register_nav_menus(array(
    'primary' => __('Primary Menu', 'my-block-theme'),
    'footer' => __('Footer Menu', 'my-block-theme'),
));

function enqueue_google_fonts() {
    // Enqueue the Google Fonts Stylesheets
    wp_enqueue_style(
        'google-fonts', // Handle name for the stylesheet
        'https://fonts.googleapis.com/css2?family=Koulen&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap', // Google Fonts URL
        false, // No dependencies
        null // Version (optional)
    );

    // Preconnect to Google Fonts and Fonts.gstatic.com
    wp_resource_hints(
        array(
            'https://fonts.googleapis.com', // Preconnect to Google Fonts
            'https://fonts.gstatic.com'     // Preconnect to Google Fonts CDN
        ), 'preconnect'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_google_fonts');


?>
