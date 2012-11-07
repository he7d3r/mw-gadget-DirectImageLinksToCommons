/**
 * Direct imagelinks to Commons
 *
 * @source: http://www.mediawiki.org/wiki/Snippets/Direct_imagelinks_to_Commons
 * @author: [[commons:User:Krinkle]]
 * @rev: 4
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/Direct imagelinks to Commons.js]] ([[File:User:Helder.wiki/Tools/Direct imagelinks to Commons.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';

if ( mw.config.get( 'wgNamespaceNumber', 0 ) >= 0 ) {
	$( function() {
		// Must be relative without "https://secure.wikimedia.org."
		// to avoid triggering 'div#content a[href ^="https://"]' lock-icons
		var     commonsBase = mw.config.get( 'wgServer' ) === "https://secure.wikimedia.org"
				? '/wikipedia/commons/wiki/File:'
				: '//commons.wikimedia.org/wiki/File:',
			localBase = mw.util.wikiGetlink( mw.config.get( 'wgFormattedNamespaces' )['6'] + ':' ),
			uploadBaseRe = new RegExp( '^' + $.escapeRE( '//upload.wikimedia.org/wikipedia/commons/' ) );
		/*jslint unparam:true*/
		$( 'a.image' ).attr( 'href', function( i, currVal ) {
			if ( uploadBaseRe.test( $(this).find( 'img' ).attr( 'src' ) ) ) {
				return currVal.replace( localBase, commonsBase );
			}
		});
		/*jslint unparam:false*/
	});
}

}( mediaWiki, jQuery ) );