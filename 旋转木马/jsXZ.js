window.onload=function(){
	//需求1，刷新页面，旋转木马样式缓动出现
	//需求2，鼠标放在框内，左右两侧箭头缓动浮现，鼠标拿开，左右两侧箭头缓动消失
	//需求3,点击左侧按钮，旋转木马王前走，点击右侧按钮，旋转木马往后走
	
	//需求1：
	//将所有页面效果加载出来
	//步骤一：写出所有样式
	var json=[
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
	
	//步骤二：获取元素
	var all=document.getElementsByClassName("all")[0];
	var mainCenter=document.getElementsByClassName("main-center")[0];
	var ul=document.getElementsByTagName("ul")[0];
	var liArr=document.getElementsByTagName("li");
	var adLeftRight=document.getElementsByClassName("adLeftRight")[0];
	var adLeft=document.getElementsByClassName("adLeft")[0];
	var adRight=document.getElementsByClassName("adRight")[0];
	var bool;
	
	//鼠标移开和放上去
	all.onmouseover=function() {
		animate(adLeftRight,{"opacity":100});
	}
	
	all.onmouseout=function () {
		animate(adLeftRight,{"opacity":0});
	}
	
	
	//利用缓动动画效果给样式
	
	for(var i=0;i<liArr.length;i++){
    	animate(liArr[i],{"width":json[i].width,"height":json[i].height,"top":json[i].top,"left":json[i].left,"opacity":json[i].opacity,"zIndex":json[i].zIndex});
    }
	
	
	//点击左右侧的按钮，旋转木马旋转
	//利用一个函数，来完成这个
	
	//点击左边的按钮，第四张图片到第三个样式盒子，第五张图片到第四个样式盒子，第三张图片到第二个样式盒子，
	//第二张图片到第一个样式盒子，所以会多了一个样式盒子,那么删除最后一个样式，把第一张图片添加进去
	adLeft.onclick=function (){
		move(true);
	}
	//点击右边的按钮，第三张图片到第四个样式盒子，第四张图片到第五个样式盒子，第二张图片到第三个样式盒子，
	//第一张图片到第二个样式盒子，所以会多了一个样式盒子,那么删除第一个样式，把第五张图片添加进去
	//
	adRight.onclick=function (){
		move(false);
	}
	
	
	function move(bool){
		if(bool==true||bool==false){
			if(bool){
	//点击左边的按钮，第四张图片到第三个样式盒子，第五张图片到第四个样式盒子，第三张图片到第二个样式盒子，
	//第二张图片到第一个样式盒子，所以会多了一个样式盒子,那么删除最后一个样式，把第一张图片添加进去
	//其实这个的目的也是想让第一张图片放在第五个样式里面，那么把第五个样式添加在json的最前面即可，那么循环的时候，第一张图片自然就进去了
				//json.push() 最后添加
    			//json.unshift() 最前面添加
    			//json.pop() 删除最后一位
    			//json.shift() 删除第一位
				var ele=json.pop();
				json.unshift(ele);
			}else{
	//点击右边的按钮，第三张图片到第四个样式盒子，第四张图片到第五个样式盒子，第二张图片到第三个样式盒子，
	//第一张图片到第二个样式盒子，所以会多了一个样式盒子,那么删除第一个样式，把第五张图片添加进去
	//其实这个的目的是想让第五张照片放在第一个样式，那么就把第一个样式删除了，放在json的第五个,那么循环的时候，第五张图片自然放在json的第五个
				var ele=json.shift();
				json.push(ele);
				
			}
		}
		
		//注意这里的位置！！！要放在move函数里面！！！
		for(var i=0;i<liArr.length;i++){
    	animate(liArr[i],{"width":json[i].width,"height":json[i].height,"top":json[i].top,"left":json[i].left,"opacity":json[i].opacity,"zIndex":json[i].zIndex});
	}
	
	
    }
}
