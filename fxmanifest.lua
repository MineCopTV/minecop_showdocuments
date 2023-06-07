-- Script Metadata
fx_version 'cerulean'
game 'gta5'
-- Script info
author 'MineCop'
description 'MineCop Show Documents'
version '1.0.0'
-- Script files
server_scripts {
	'@mysql-async/lib/MySQL.lua',
	'@es_extended/locale.lua',
	'locales/*.lua',
	'config.lua',
	'server/*.lua'
}
client_scripts {
	'@es_extended/locale.lua',
	'locales/*.lua',
	'config.lua',
	'client/*.lua'
}
-- UI page
ui_page('html/UI.html')
files({
    'html/UI.html',
	'html/css/app.css',
	'html/js/app.js',
	'html/img/*.png',
	'html/img/profile/*.png',
	'html/img/logo/*.png'
})
-- Script starts after
dependencies {
	'es_extended',
	'esx_identity',
	'esx_license'
}