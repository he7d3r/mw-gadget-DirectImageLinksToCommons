/**
 * Direct imagelinks to Commons
 *
 * Required modules: mediawiki.RegExp, mediawiki.util
 *
 * @source www.mediawiki.org/wiki/Snippets/Direct_imagelinks_to_Commons
 * @author Krinkle
 * @version 2015-06-23
 */
if ( mw.config.get( 'wgNamespaceNumber', 0 ) >= 0 ) {
	mw.hook( 'wikipage.content' ).add( function ( $content ) {
		var
			uploadBaseRe = /^\/\/upload\.wikimedia\.org\/wikipedia\/commons/,
 
			localBasePath = new RegExp( '^' + mw.RegExp.escape( mw.util.getUrl( mw.config.get( 'wgFormattedNamespaces' )['6'] + ':' ) ) ),
			localBaseScript = new RegExp( '^' + mw.RegExp.escape( mw.util.wikiScript() + '?title=' + mw.util.wikiUrlencode( mw.config.get( 'wgFormattedNamespaces' )['6'] + ':' ) ) ),
 
			commonsBasePath = '//commons.wikimedia.org/wiki/File:',
			commonsBaseScript = '//commons.wikimedia.org/w/index.php?title=File:';
 		/*jshint unused:false */
		$content.find( 'a.image' ).attr( 'href', function ( i, currVal ) {
			if ( uploadBaseRe.test( $( this ).find( 'img' ).attr( 'src' ) ) ) {
				return currVal
					.replace( localBasePath, commonsBasePath )
					.replace( localBaseScript, commonsBaseScript );
			}
		} );
		/*jshint unused:true */
	} );
}
