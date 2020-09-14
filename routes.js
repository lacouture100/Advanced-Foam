const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'index', '/' )
  .add( 'studio' )
  .add( 'construction' )
  .add( 'packaging' )
  .add( 'constructionPost', '/construction/:slug' )
  .add( 'studioPost', '/studio/:slug' )
  .add( 'packagingPost', '/packaging/:slug' );
  
