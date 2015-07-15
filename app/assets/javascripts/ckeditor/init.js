//= require_self
//= require ckeditor/ckeditor

(function() {
  if (typeof window['CKEDITOR_BASEPATH'] === "undefined" || window['CKEDITOR_BASEPATH'] === null) {
    window['CKEDITOR_BASEPATH'] = "/assets/ckeditor/";
  }

  // Just assume the JS file is being minified and contains a trailing hash (eg, application-<hash>.js):
  if(! window['CKEDITOR_CBUSTER']) {
    var scriptHash  = '';

    try {
      var cScriptSrc, fileName;

      if(document.currentScript) {
        cScriptSrc  = document.currentScript.src,
        fileName    = cScriptSrc.split("/").pop();
      } else {
        fileName    = $('script[src*="dk5-application"]').attr('src');
      }

      fileName = fileName.split(".js").shift();
      fileName = fileName.split("-").pop();

      if(fileName) { scriptHash = fileName; }
    } catch(e) { /* meh */ }

    window['CKEDITOR_CBUSTER'] = scriptHash;
  }

}).call(this);
