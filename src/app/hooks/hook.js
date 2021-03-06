

//
// This Cordova hook copies various resource files into the appropriate platform specific location
//


// configure all the files to copy.  Key of object is the source file, value is the destination location.  It's fine to put all platforms' icons and splash screen files here, even if we don't build for all platforms on each developer's box.
var filestocopy = [
{
    "img/touch/icon-60.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-60.png"
},
{
    "img/touch/icon-60@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-60@2x.png"
},
{
    "img/touch/icon-60@3x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-60@3x.png"
},
{
    "img/touch/icon-72.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-72.png"
},
{
    "img/touch/icon-72@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-72@2x.png"
},
{
    "img/touch/icon-76.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-76.png"
},
{
    "img/touch/icon-76@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-76@2x.png"
},
{
    "img/touch/icon-small-40.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-small-40.png"
},
{
    "img/touch/icon-small-40@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-small-40@2x.png"
},
{
    "img/touch/icon-40@3x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-40@3x.png"
},
{
    "img/touch/icon-50.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-50.png"
},
{
    "img/touch/icon-50@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-50@2x.png"
},
{
    "img/touch/icon-small.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-small.png"
},
{
    "img/touch/icon-small@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-small@2x.png"
},
{
    "img/touch/icon-small@3x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon-small@3x.png"
},
{
    "img/touch/icon.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon.png"
},
{
    "img/touch/icon@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/icon@2x.png"
},
{
    "img/touch/itunesartwork@2x.png": "platforms/ios/Sayings of the Wise/Resources/icons/itunesartwork@2x.png"
},
{
    "img/startup/default-568h@2x-iphone.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-568h@2x-iphone.png"
},
{
    "img/startup/default-landscape@2x-ipad.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-landscape@2x-ipad.png"
},
{
    "img/startup/default-landscape-ipad.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-landscape-ipad.png"
},
{
    "img/startup/default-portrait@2x-ipad.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-portrait@2x-ipad.png"
},
{
    "img/startup/default-portrait-ipad.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-portrait-ipad.png"
},
{
    "img/startup/default@2x-iphone.png": "platforms/ios/Sayings of the Wise/Resources/splash/default@2x-iphone.png"
},
{
    "img/startup/default-iphone.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-iphone.png"
},
{
    "img/startup/default-667h.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-667h.png"
},
{
    "img/startup/default-736h.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-736h.png"
},
{
    "img/startup/default-landscape-736h.png": "platforms/ios/Sayings of the Wise/Resources/splash/default-landscape-736h.png"
},
];


var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
        	fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
        }
    });
});
