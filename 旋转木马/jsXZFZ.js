window.onload=function (){
	//需求：点击左右按钮，实现旋转木马
	//原理：点击右侧按钮，让第三张图片到第四个样式中，第四张图片到第五个样式中，第二张图片到第三个样式中，第一张图片到第二个样式中
	//那么第一个样式就空出来了，所以就给删掉，把第五张图片放进来
	
	//步骤：鼠标放到轮播图上，两侧的按钮显示，移开隐藏
	
	//2.让页面加载出所有的盒子的样式
	
	//3.把两侧按钮绑定事件（调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转）
	
	//4.书写函数（操作数组）
	
	var arr=[
	{   //  1
            width:400,
            height:200,
            top:70,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:600,
            height:300,
            top:120,
            left:0,
           	opacity:80,
            zIndex:3
        },
        {   // 3
            width:800,
            height:400,
            top:100,
            left:200,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:600,
            height:300,
            top:120,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:400,
            height:200,
            top:70,
            left:750,
            opacity:20,
            zIndex:2
        }];
    
    
    //0获取元素
    var all=document.getElementsByClassName("all")[0];
	var mainCenter=document.getElementsByClassName("main-center")[0];
	var ul=document.getElementsByTagName("ul")[0];
	var liArr=document.getElementsByTagName("li");
	var adLeftRight=document.getElementsByClassName("adLeftRight")[0];
	var adLeft=document.getElementsByClassName("adLeft")[0];
	var adRight=document.getElementsByClassName("adRight")[0];
	var bool;
   	//设置一个开闭原则变量
  var flag = true;
    
    //当鼠标放在all上，两侧按钮显示，移开，按钮隐藏
    //用opacity会有一个显现出来的过程
    all.onmouseover=function() {
		animate(adLeftRight,{"opacity":100});
	}
	
	all.onmouseout=function () {
		animate(adLeftRight,{"opacity":0});
	}
    
    
    //让页面加载所有盒子样式
    //因为这里与后面的代码重合了，所以直接调用move();move()里面也有该部分代码；
    
//  for(var i=0;i<liArr.length;i++){
//  	animate(liArr[i],{"width":json[i].width,"height":json[i].height,"left":json[i].left,"opacity":json[i].opacity,"zIndex":json[i].zIndex});
//  }

	move();
	
	//精简代码之后还有一个BUG，就是如果快速点击两侧按钮，那么第一张图片还没出现，第二张图片因为层级高，就直接把它压过去了
	//所以我们得设计成，等第一张图片完全出来之后，才能执行第二张，即回调函数出现
	
    
    
    //把两侧按钮绑定事件
    adLeft.onclick=function(){


		  if(flag){
            flag = false;
            move(true);
        }
//		if(flag === true){
//                  flag = false;
//                  move(true);
                    //点击一次立刻修改为false，这样儿别人就不能在点击。（点击也不执行move()）
                
  }
    
    adRight.onclick=function(){
    	if(flag){
            flag = false;
            move(false);
        }
//  	if(flag){
//                  flag = false;
//                  move(false);
//              }
  }
    
    
     function move(bool){
        //判断：如果等于undefined,那么就不执行这两个if语句
        if(bool === true || bool === false){
            if(bool){
                arr.unshift(arr.pop());
            }else{
                arr.push(arr.shift());
            }
        }
        //在次为页面上的所有li赋值属性，利用缓动框架
        for(var i=0;i<liArr.length;i++){
            animate(liArr[i],arr[i], function () {
                flag = true;
            });
        }
    }

    
    
//  function move(bool){
//  	if(bool===true||bool===false){
//  		
//  		if(bool){
//  		//操作数组，点击右侧,是第四张照片，跑到第三个样式盒子里，第五张照片，跑到第四个样式盒子里，
//  		//第三张照片，跑到第二个样式盒子里，第二张照片，跑到第一个样式盒子里，那么第五个样式盒子就多了，
//  		//所以的删除第五个样式盒子，即删除json中最后一个，然后添加到第一个
//  			//json.push() 最后添加
//  			//json.unshift() 最前面添加
//  			//json.pop() 删除最后一位
//  			//json.shift() 删除第一位
//  			
//  			//把json中的最后一位删除了，将删除的最后一位的值赋给ele
//  			var ele=json.pop();
//  			//将最后一位，添加到第一位
//  			json.unshift(ele);
//  		
//  		}else{
//  			//操作数组，点击左侧，是第三张照片，跑到第四个样式盒子里，第四张照片，跑到第五个样式盒子里，
//  			//第二张照片，跑到第三个样式盒子里，第一张照片跑到第二个样式盒子里，那么第一个样式就多多了，
//  			//所以删除第一个样式盒子，添加到最后一位
//  			
//  			var ele=json.shift();
//  			json.push(ele);
//  		
//  		}
//  	}
    	
    	//图片运动之后，和之前的对应关系不一样了，所以需要再次赋值
//  	for(var i=0;i<liArr.length;i++){
//		animate(liArr[i],{"width":json[i].width,"top":json[i].top,"left":json[i].top,"left":json[i].left,"opacity":json[i].opacity,"zIndex":json[i].zIndex},
//  			//回调函数
//  			//所有程序执行完毕，再执行
//  			
//  			//点击一次，立即转换为flag=false
//  			//所有程序执行完毕之后，转换为flag=true
//  			//允许下一次点击执行
//  			function(){
//              //回调函数，所有程序执行完毕，在初始化flag的值为true
//              flag=true;
//            });
//  	}
//  }
    
}
	
