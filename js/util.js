var util = (function(){

	var $ = function(id){
		return document.getElementById(id);
	};
	/*----------------------------------------------------
	 *事件绑定
	 *@param element {object} 要绑定事件的节点或对象
	 *@param event {string} 事件类型
	 *@param callback {function} 要绑定的函数 
	 *----------------------------------------------------
	 */
	var addEvent = function(element,event,callback){
		if(element.addEventListener){
			element.addEventListener(event,callback,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+event,callback);
		}else{
			element['on'+event] = callback;
		}
	};

	var getEvent = function(event){
		return event ? event : window.event;
	};
	var getTarget = function(event){
		return event.target || event.srcElement;
	};
	/*----------------------------------------------------
	 *保存数据到localStorage
	 *@param key {string} 键值，之后可以通过该键值读取数据
	 *@param dataObj {object} 要保存的数据  
	 *----------------------------------------------------
	 */
	var saveData = function(key,dataObj){
		if(typeof window.localStorage!=="undefined"){
  			localStorage[key] = JSON.stringify(dataObj);
  		}else{
  			return false;
  		}
	};
	/*----------------------------------------------------------------------
	 *读取localStorage中的数据
	 *@param key {string} 通过该键值读取数据
	 *@return dataObj {object} 返回的是一个对象，该对象封装了对应键值的数据  
	 *----------------------------------------------------------------------
	 */
	var readData = function(key){
		if(typeof window.localStorage!=="undefined"){
  			return JSON.parse(localStorage[key]);
  		}else{
  			return false;
  		}
	};

	return {
		$ : $,
		addEvent : addEvent,
		saveData : saveData,
		readData : readData,
		getEvent : getEvent,
		getTarget : getTarget
	};
})();
