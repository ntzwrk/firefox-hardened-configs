/**********************
 * Firefox components *
 **********************/

// Health reports
pref("datareporting.healthreport.uploadEnabled",		false);
pref("datareporting.healthreport.about.reportUrl",		"");
pref("datareporting.healthreport.documentServerURI",		"");	// Hidden option
pref("datareporting.policy.dataSubmissionEnabled",		false);

// Crash reports
pref("breakpad.reportURL",					"");
pref("browser.crashReports.unsubmittedCheck.autoSubmit",	false);
pref("browser.crashReports.unsubmittedCheck.enabled",		false);
pref("browser.tabs.crashReporting.sendReport",			false);
pref("browser.tabs.crashReporting.requestEmail",		false);
pref("browser.tabs.crashReporting.includeURL",			false);
pref("browser.tabs.crashReporting.emailMe",			false);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",	false);
pref("dom.ipc.plugins.reportCrashURL",				false);

// Telemetry
pref("toolkit.telemetry.enabled",				false);
pref("toolkit.telemetry.unified",				false);
pref("toolkit.telemetry.cachedClientID",			"");
pref("toolkit.telemetry.server",				"");

// Telemetry experiments
pref("experiments.enabled",					false);
pref("experiments.activeExperiment",				false);
pref("experiments.supported",					false);
pref("experiments.manifest.uri",				"");
pref("network.allow-experiments",				false);

// Pocket
pref("extensions.pocket.enabled",				false);
pref("extensions.pocket.api",					"");	// Hidden option
pref("extensions.pocket.oAuthConsumerKey",			"");	// Hidden option
pref("extensions.pocket.site",					"");	// Hidden option

// Suggested sites
pref("browser.newtabpage.enhanced",				false);
pref("browser.newtabpage.introShown",				true);
pref("browser.newtabpage.directory.ping",			"");
pref("browser.newtabpage.directory.source",			"");

// Safe browsing
pref("browser.safebrowsing.malware.enabled",					false);
pref("browser.safebrowsing.phishing.enabled",					false);
pref("browser.safebrowsing.downloads.enabled",					false);
pref("browser.safebrowsing.downloads.remote.enabled",				false);
pref("browser.safebrowsing.downloads.remote.block_dangerous",			false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host",		false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted",	false);
pref("browser.safebrowsing.downloads.remote.block_uncommon",			false);
pref("browser.safebrowsing.downloads.remote.url",				"");

// Google SafeBrowsing update URLs
pref("browser.safebrowsing.provider.google.updateURL",		"");
pref("browser.safebrowsing.provider.google.gethashURL",		"");
pref("browser.safebrowsing.provider.google4.updateURL",		"");
pref("browser.safebrowsing.provider.google4.gethashURL",	"");

// Mozilla SafeBrowsing update URLs
pref("browser.safebrowsing.provider.mozilla.updateURL",		"");
pref("browser.safebrowsing.provider.mozilla.gethashURL",	"");

// SafeBrowsing reporting URLs
pref("browser.safebrowsing.provider.google.reportURL",		"");
pref("browser.safebrowsing.provider.google4.reportURL",		"");
pref("browser.safebrowsing.reportMalwareMistakeURL",		"");
pref("browser.safebrowsing.reportPhishMistakeURL",		"");
pref("browser.safebrowsing.reportPhishURL",			"");

// Heartbeat
pref("browser.selfsupport.enabled",				false);	// Hidden option
pref("browser.selfsupport.url",					"");

// WebIDE
pref("devtools.webide.enabled",					false);
pref("devtools.webide.autoinstallADBHelper",			false);
pref("devtools.webide.autoinstallFxdtAdapters",			false);

// Remote debugging
pref("devtools.debugger.remote-enabled",			false);



/**************
 * Extensions *
 **************/

// Extension updates
pref("extensions.update.enabled",				true);

// Extension block list
pref("extensions.blocklist.enabled",				true);
pref("extensions.blocklist.url",				"https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");

// Extension metadata update
pref("extensions.getAddons.cache.enabled",			false);

// Click to play
pref("plugins.click_to_play",					true);

// Flash
pref("plugin.state.flash",					0);

// Java
pref("plugin.state.java",					0);

// Gnome Shell integration
pref("plugin.state.libgnome-shell-browser-plugin",		0);	// Not found, probably only available if using Gnome Shell



/****************
 * Cryptography *
 ****************/

// TLS versions
pref("security.tls.version.min",				1);
pref("security.tls.version.max",				4);

// TLS version fallback
pref("security.tls.version.fallback-limit",			3);

// Session tickets
pref("security.ssl.disable_session_identifiers",		true);	// Hidden option

// OCSP
pref("security.OCSP.enabled",					1);

// OCSP stapling
pref("security.ssl.enable_ocsp_stapling",			true);

//
pref("security.cert_pinning.enforcement_level",			2);

// SSL error reporting
pref("security.ssl.errorReporting.enabled",			false);
pref("security.ssl.errorReporting.automatic",			false);
pref("security.ssl.errorReporting.url",				"");



/***********
 * Ciphers *
 ***********/

// disable 1024-bit dh primes
pref("security.ssl3.dhe_rsa_aes_128_sha",			false);
pref("security.ssl3.dhe_rsa_aes_256_sha",			false);

// RC4 fallback
pref("security.tls.unrestricted_rc4_fallback",			false);



/***************
 * HTML5 / DOM *
 ***************/

//
pref("dom.indexedDB.enabled",					false);

// Gamepad
pref("dom.gamepad.enabled",					false);

// Vibrator
pref("dom.vibrator.enabled",					false);

// Virtual reality
pref("dom.vr.enabled",						false);
pref("dom.vr.oculus.enabled",					false);
pref("dom.vr.openvr.enabled",					false);
pref("dom.vr.osvr.enabled",					false);

// Battery
pref("dom.battery.enabled",					false);

// Network information
pref("dom.netinfo.enabled",					false);

// Timing
pref("dom.enable_performance",					false);

// User timing
pref("dom.enable_user_timing",					false);

// Raw TCP socket
pref("dom.mozTCPSocket.enabled",				false);	// Hidden option

// WebRTC
pref("media.peerconnection.enabled",				false);

//
pref("media.peerconnection.turn.disable",			true);

// Hide internal IP
pref("media.peerconnection.ice.default_address_only",		true);
pref("media.peerconnection.ice.no_host",			true);

//
pref("media.getusermedia.screensharing.enabled",		false);

//
pref("media.getusermedia.audiocapture.enabled",			false);

//
pref("media.getusermedia.browser.enabled",			false);

//
pref("media.peerconnection.video.enabled",			false);

// Speech synthesis
pref("media.webspeech.synth.enabled",				false);

// Speech recognition
pref("media.webspeech.recognition.enable",			false);

pref("media.navigator.enabled",					false);

pref("browser.send_pings",					false)
// Here will stand an option
pref("browser.send_pings.require_same_host",			true);

// Beacons
pref("beacon.enabled",						false);

// WebGL
pref("webgl.disabled",						true);
pref("webgl.min_capability_mode",				true);
pref("webgl.disable-extensions",				true);
pref("webgl.disable-fail-if-major-performance-caveat",		true);
pref("webgl.enable-debug-renderer-info",			false);
pref("pdfjs.enableWebGL",					false);



/***********
 * Caching *
 ***********/

// Clean on shutdown
pref("privacy.sanitize.sanitizeOnShutdown",			true);
pref("privacy.sanitize.timeSpan",				0);

// Clean categories on shutdown
pref("privacy.clearOnShutdown.cache",				false);
pref("privacy.clearOnShutdown.cookies",				true);
pref("privacy.clearOnShutdown.downloads",			false);
pref("privacy.clearOnShutdown.formdata",			false);
pref("privacy.clearOnShutdown.history",				false);
pref("privacy.clearOnShutdown.offlineApps",			false);
pref("privacy.clearOnShutdown.passwords",			false);
pref("privacy.clearOnShutdown.sessions",			false);
pref("privacy.clearOnShutdown.siteSettings",			false);
pref("privacy.clearOnShutdown.openWindows",			false);

// Manual clean
pref("privacy.cpd.cache",					true);
pref("privacy.cpd.cookies",					true);
pref("privacy.cpd.downloads",					false);
pref("privacy.cpd.formdata",					false);
pref("privacy.cpd.history",					false);
pref("privacy.cpd.offlineApps",					false);
pref("privacy.cpd.passwords",					false);
pref("privacy.cpd.sessions",					false);
pref("privacy.cpd.siteSettings",				false);
pref("privacy.cpd.openWindows",					false);

// Private browsing mode
pref("browser.privatebrowsing.autostart",			false);

// Offline cache
pref("browser.cache.offline.enable",				false);

// Disk cache
pref("browser.cache.disk.enable",				true);

// Memory cache
pref("browser.cache.memory.enable",				false);

// 
pref("browser.cache.disk_cache_ssl",				false);

// Form autofill
pref("browser.formfill.enable",					false);

// Extra session data
pref("browser.sessionstore.privacy_level",			0);

// History
pref("places.history.enabled",					true);

// Cookie lifetime
pref("network.cookie.lifetimePolicy",				2);

//
pref("offline-apps.allow_by_default",				false);

// Visited links
pref("layout.css.visited_links_enabled",			false);



/*****************
 * Miscellaneous *
 *****************/

// Face detection
pref("camera.control.face_detection.enabled",			false);

// Reading sensors
pref("device.sensors.enabled",					false);

// Geo location
pref("geo.enabled",						false);
pref("geo.wifi.uri",						"");
pref("geo.wifi.logging.enabled",				false);	// Hidden option
pref("geo.wifi.xhr.timeout",					1); 
pref("browser.search.geoip.url",				"");
pref("browser.search.geoip.timeout",				1);

// Copy selected contents to clipboard
pref("clipboard.autocopy",					false);

// Keyboard events
pref("dom.keyboardevent.code.enabled",				false);

//
pref("keyword.enabled",						false);

//
pref("browser.urlbar.trimURLs",					false);

//
pref("browser.fixup.alternate.enabled",				false);

//
pref("browser.tabs.closeWindowWithLastTab",			false);

//
pref("browser.ctrlTab.previews",				true);

// Social
pref("social.remote-install.enabled",				false);
pref("social.share.activationPanelEnabled",			false);
pref("social.toast-notifications.enabled",			false);
pref("social.shareDirectory",					"");
pref("social.whitelist",					"");
pref("social.directories",					"");
pref("social.sidebar.unload_timeout_ms",			1);


// disable cookies from 3rd parties
pref("network.cookie.cookieBehavior",					1);
pref("signon.rememberSignons",							false);
// enable Do Not Track
pref("privacy.donottrackheader.enabled",				true);
// enable tracking protection
// https://support.mozilla.org/t5/Protect-your-privacy/Tracking-Protection-in-Firefox/ta-p/18255
pref("privacy.trackingprotection.enabled",				true);
// disable DNS prefetch
pref("network.dns.disablePrefetch",						true);
// try resolving DNS over SOCKS proxies (needed for Tor)
pref("network.proxy.socks_remote_dns",					true);
// disable search suggestions
pref("browser.search.suggest.enabled",					false);
// do not embed the `missing flash player` frame
pref("plugins.notifyMissingFlash",						false);
// set the useragent to the same one used by the Tor browser
pref("general.useragent.override",						"Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0");
// set the platform to the same one used by the Tor browser
pref("general.platform.override",						"Win32");