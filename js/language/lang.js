$( document ).ready(function() { setLang('english');});
function setLang(lang){ $.getScript('js/language/lang_'+lang+'.js') }
