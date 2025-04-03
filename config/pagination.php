<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Default Pagination View
    |--------------------------------------------------------------------------
    |
    | This option controls the default pagination view that will be used to
    | render the pagination links. You may change this to any of the views
    | provided here, or you may provide your own view to render the links.
    |
    */

    'default' => 'tailwind',

    /*
    |--------------------------------------------------------------------------
    | Pagination Views
    |--------------------------------------------------------------------------
    |
    | Here you may customize the pagination views. You can specify a custom
    | view for each pagination driver. The views will be used to render the
    | pagination links. You may change these views to any of the views
    | provided here, or you may provide your own view to render the links.
    |
    */

    'views' => [
        'tailwind' => 'vendor.pagination.tailwind',
        'bootstrap' => 'vendor.pagination.bootstrap-5',
        'simple' => 'vendor.pagination.simple-tailwind',
        'simple-bootstrap' => 'vendor.pagination.simple-bootstrap-5',
    ],
]; 