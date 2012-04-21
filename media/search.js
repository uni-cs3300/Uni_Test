/* start module: search */
$pyjs.loaded_modules['search'] = function (__mod_name__) {
	if($pyjs.loaded_modules['search'].__was_initialized__) return $pyjs.loaded_modules['search'];
	var $m = $pyjs.loaded_modules["search"];
	$m.__repr__ = function() { return "<module: search>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'search';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['re'] = $p['___import___']('re', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$m['KEY_ENTER'] = $p['___import___']('pyjamas.ui.KeyboardListener.KEY_ENTER', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['JSONParser'] = $p['___import___']('pyjamas.JSONParser.JSONParser', null, null, false);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$m['Search'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'search';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var parser,$attr20,$attr9,$attr8,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12;
			$m['Window']['alert']('Loadingg');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('remote', (typeof DataService == "undefined"?$m.DataService:DataService)()) : $p['setattr'](self, 'remote', (typeof DataService == "undefined"?$m.DataService:DataService)());
			parser = $m['JSONParser']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('mainPanel', $m['VerticalPanel']()) : $p['setattr'](self, 'mainPanel', $m['VerticalPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchPanel', $m['HorizontalPanel']()) : $p['setattr'](self, 'searchPanel', $m['HorizontalPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('resultsPanel', $m['VerticalPanel']()) : $p['setattr'](self, 'resultsPanel', $m['VerticalPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('deptLabel', $m['Label']('Department')) : $p['setattr'](self, 'deptLabel', $m['Label']('Department'));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('deptBox', $m['TextBox']()) : $p['setattr'](self, 'deptBox', $m['TextBox']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('courseNoLabel', $m['Label']('Course Number')) : $p['setattr'](self, 'courseNoLabel', $m['Label']('Course Number'));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('courseNoBox', $m['TextBox']()) : $p['setattr'](self, 'courseNoBox', $m['TextBox']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchButton', $m['Button']('Search', (($attr1=($attr2=self)['searchCourses']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'searchCourses'):
						self['searchCourses']))) : $p['setattr'](self, 'searchButton', $m['Button']('Search', (($attr1=($attr2=self)['searchCourses']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'searchCourses'):
						self['searchCourses'])));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchPanel', $m['VerticalPanel']()) : $p['setattr'](self, 'searchPanel', $m['VerticalPanel']());
			self['searchPanel']['add']((($attr3=($attr4=self)['deptLabel']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'deptLabel'):
						self['deptLabel']));
			self['searchPanel']['add']((($attr5=($attr6=self)['deptBox']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'deptBox'):
						self['deptBox']));
			self['searchPanel']['add']((($attr7=($attr8=self)['courseNoLabel']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'courseNoLabel'):
						self['courseNoLabel']));
			self['searchPanel']['add']((($attr9=($attr10=self)['courseNoBox']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'courseNoBox'):
						self['courseNoBox']));
			self['searchPanel']['add']((($attr11=($attr12=self)['searchButton']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'searchButton'):
						self['searchButton']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('resultsLabel', $m['Label']('Results here')) : $p['setattr'](self, 'resultsLabel', $m['Label']('Results here'));
			self['resultsPanel']['add']((($attr13=($attr14=self)['resultsLabel']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'resultsLabel'):
						self['resultsLabel']));
			self['mainPanel']['add']((($attr15=($attr16=self)['searchPanel']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'searchPanel'):
						self['searchPanel']));
			self['mainPanel']['add']((($attr17=($attr18=self)['resultsPanel']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'resultsPanel'):
						self['resultsPanel']));
			$m['RootPanel']()['add']((($attr19=($attr20=self)['mainPanel']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'mainPanel'):
						self['mainPanel']));
			self['deptBox']['setFocus'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Search', $p['tuple']($bases), $data);
	})();
	$m['DataService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'search';
		$cls_definition['methods'] = $p['list'](['getSearch']);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			$m['JSONProxy']['__init__'](self, 'services/', (($attr21=($attr22=$m['DataService'])['methods']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'methods'):
						$m['DataService']['methods']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DataService', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('./search.html');
		$m['app'] = $m['Search']();
		$m['app']['onModuleLoad']((typeof self == "undefined"?$m.self:self));
		$m['pyjd']['run']();
	}
	return this;
}; /* end search */


/* end module: search */


/*
PYJS_DEPS: ['pyjd', 're', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KEY_ENTER', 'pyjamas.Window', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser', 'pygwt']
*/
