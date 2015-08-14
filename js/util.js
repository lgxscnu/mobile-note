var util = (function(){

	var $ = function(id){
		return document.getElementById(id);
	};
<<<<<<< HEAD
    
    var byClass = function(classname,parent){
        var oParent = parent?document.getElementById(parent):document,
            ele=[],
            elements = oParent.getElementsByTagName('*');
        for(var i=0;i<elements.length;i++){
            if(elements[i].className==classname){
                ele.push(elements[i]);
            }
        }
        return ele;//返回的是数组
    }
    
=======
>>>>>>> f87c2ffc0051d9a52bb78c52dd76a207c2abe55c
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
<<<<<<< HEAD
    var removeEvent = function(element,event,callback){
        if(element.removeEventListener){
            element.removeEventListener(event,callback,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+event,callback);
        }else{
            element['on'+event] = null;
        }
    };
    var preventEvent = function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    };
    var stopEvent = function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    };
=======
>>>>>>> f87c2ffc0051d9a52bb78c52dd76a207c2abe55c

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
<<<<<<< HEAD
    
    

	return {
		$ : $,
        byClass:byClass,
		addEvent : addEvent,
        removeEvent: removeEvent,
        preventEvent: preventEvent,
        stopEvent: stopEvent,
=======

	return {
		$ : $,
		addEvent : addEvent,
>>>>>>> f87c2ffc0051d9a52bb78c52dd76a207c2abe55c
		saveData : saveData,
		readData : readData,
		getEvent : getEvent,
		getTarget : getTarget
	};
<<<<<<< HEAD
})();
=======
})();
>>>>>>> f87c2ffc0051d9a52bb78c52dd76a207c2abe55c
