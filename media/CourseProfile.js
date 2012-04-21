/* start module: CourseProfile */
$pyjs.loaded_modules['CourseProfile'] = function (__mod_name__) {
	if($pyjs.loaded_modules['CourseProfile'].__was_initialized__) return $pyjs.loaded_modules['CourseProfile'];
	var $m = $pyjs.loaded_modules["CourseProfile"];
	$m.__repr__ = function() { return "<module: CourseProfile>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CourseProfile';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', null, null, false);
	$m['FileUpload'] = $p['___import___']('pyjamas.ui.FileUpload.FileUpload', null, null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$m['KEY_ENTER'] = $p['___import___']('pyjamas.ui.KeyboardListener.KEY_ENTER', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['JSONParser'] = $p['___import___']('pyjamas.JSONParser.JSONParser', null, null, false);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$m['CourseProfile'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'CourseProfile';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2,$attr3,$attr4;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('mainPanel', $m['VerticalPanel']()) : $p['setattr'](self, 'mainPanel', $m['VerticalPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('courseTable', $m['FlexTable']()) : $p['setattr'](self, 'courseTable', $m['FlexTable']());
			self['courseTable']['setText'](0, 0, 'Course Title: ');
			self['courseTable']['setText'](1, 0, 'Course Description: ');
			self['courseTable']['setText'](2, 0, 'Enroll: ');
			self['courseTable']['setText'](3, 0, 'Friends: ');
			self['mainPanel']['add']((($attr1=($attr2=self)['courseTable']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'courseTable'):
						self['courseTable']));
			$m['RootPanel']()['add']((($attr3=($attr4=self)['mainPanel']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'mainPanel'):
						self['mainPanel']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var description,$and1,$and2,enrolled,row,name;
			$m['Window']['alert'](response);
			row = self['ratingsTable']['getRowCount']();
			name = response.__getitem__('name');
			description = response.__getitem__('description');
			enrolled = response.__getitem__('enrolled');
			$m['Window']['alert'](name);
			if ($p['bool'](($p['bool']($and1=name['isalpha']())?description['isalpha']():$and1))) {
				self['courseTable']['add'](0, 1, name);
				self['courseTable']['add'](1, 1, description);
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, message, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				message = arguments[2];
				request_info = arguments[3];
			}
			var $add8,$add2,$add3,$add1,$add6,$add7,$add4,$add5;
			$m['Window']['alert']($p['__op_add']($add7=$p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=$p['str'](code),$add2='||'),$add4=$p['str'](message)),$add6='||'),$add8=$p['str'](request_info)));
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CourseProfile', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('./CourseProfile.html');
		$m['app'] = $m['CourseProfile']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end CourseProfile */


/* end module: CourseProfile */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.FileUpload.FileUpload', 'pyjamas.ui.FileUpload', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KEY_ENTER', 'pyjamas.Window', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser', 'pygwt']
*/
