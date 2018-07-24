// JavaScript Document

window.onload = function(){

}

var $ = function(id) {
    return document.getElementById(id)
}

function initBody()
{
	initMenuInfo();
    initMenu();
    doResize();
}

window.onresize = function(){
	doResize();
}

function doResize()
{
    var oLeft = $('areaLeft');
    var oRight = $('areaRight');
    var oHead = $('header');
	var oBottom = $('bottomArea');
    var oFrame = $('rightFrame');

    if (null == oLeft || null == oRight || null == oHead || null == oFrame || null == oBottom)
    {
        return;
    }

    var iClientWidth = document.body.clientWidth;
    var iClientHeight = document.body.clientHeight;
    var iHeadHeight = oHead.offsetHeight;
	var iBottomHeight = oBottom.offsetHeight;


    var iLeftMargin_TOP = 8;
    var iLeftMargin_RIGHT = 0;
    var iLeftMargin_BOTTOM = 4;
    var iLeftMargin_LEFT = 4;

    // 左边
    var iLeftHeight = iClientHeight - iHeadHeight - iBottomHeight - iLeftMargin_TOP - iLeftMargin_BOTTOM;

    oLeft.style.height = iLeftHeight + "px";

    var iRightMargin_TOP = 8;
    var iRightMargin_RIGHT = 8;
    var iRightMargin_BOTTOM = 8;
    var iRightMargin_LEFT = 0;

    // 右边
    var iRightHeight = iClientHeight - iHeadHeight - iBottomHeight - iRightMargin_TOP - iRightMargin_BOTTOM;

    oRight.style.height = iRightHeight + "px";

    // frame
    var iFrameMargin_TOP = 1;
    var iFrameMargin_RIGHT = 1;
    var iFrameMargin_BOTTOM = 1;
    var iFrameMargin_LEFT = 1;

    var iFrameOffsetTop = oFrame.offsetTop;
    var iFrameOffsetLeft = oFrame.offsetLeft;

    var iFrameHeight = iRightHeight - iFrameOffsetTop - iFrameMargin_TOP - iFrameMargin_BOTTOM;
    oFrame.style.height = iFrameHeight + "px";

}

var g_arrDivInfo = new Array();

/* 配置 */
function initMenuInfo()
{
	var arrChildInfo = initParamChild();
	g_arrDivInfo.push({
		'id':'Param',
		'name':'参数配置',
		'child':arrChildInfo
	});

	arrChildInfo = initStatusChild();
	g_arrDivInfo.push({
		'id':'Status',
		'name':'状态查询',
		'child':arrChildInfo
	});

	arrChildInfo = initRecordChild();
	g_arrDivInfo.push({
		'id':'Record',
		'name':'记录查询',
		'child':arrChildInfo
	});

	arrChildInfo = initDistInfoChild();
	g_arrDivInfo.push({
		'id':'DistInfo',
		'name':'配送信息',
		'child':arrChildInfo
	});

	arrChildInfo = initBaseDataChild();
	g_arrDivInfo.push({
		'id':'BaseData',
		'name':'基础数据',
		'child':arrChildInfo
	});

	arrChildInfo = initLogManageChild();
	g_arrDivInfo.push({
		'id':'LogManage',
		'name':'日志管理',
		'child':arrChildInfo
	});
}

/* 参数配置子节点 */
function initParamChild()
{
	var arrDivInfo = new Array();

	arrDivInfo.push({
		'id':'param_dev',
		'name':'设备参数',
		'url':'page/param_dev.html'
	});
	arrDivInfo.push({
		'id':'param_adhoc',
		'name':'自组网参数',
		'url':'page/param_adhoc.html'
	});
	arrDivInfo.push({
		'id':'param_locks',
		'name':'锁参数',
		'url':'page/param_locks.html'
	});
	arrDivInfo.push({
		'id':'param_mobile',
		'name':'移动网络参数',
		'url':'page/param_mobile.html'
	});
	arrDivInfo.push({
		'id':'param_server',
		'name':'服务器参数',
		'url':'page/param_server.html'
	});

	return arrDivInfo;
}

// 状态查询
function initStatusChild()
{
	var arrDivInfo = new Array();

	arrDivInfo.push({
		'id':'status_dev',
		'name':'设备状态',
		'url':'page/status_dev.html'
	});
	arrDivInfo.push({
		'id':'status_gps',
		'name':'GPS状态',
		'url':'page/status_gps.html'
	});
	arrDivInfo.push({
		'id':'status_locks',
		'name':'锁状态',
		'url':'page/status_locks.html'
	});

	return arrDivInfo;
}

// 记录查询
function initRecordChild() {
    var arrDivInfo = new Array();

    arrDivInfo.push({
        'id':'record_alarm',
        'name':'报警记录',
        'url':'page/record_alarm.html'
    });
    arrDivInfo.push({
        'id':'record_clearalarm',
        'name':'清除报警记录',
        'url':'page/record_clearalarm.html'
    });
    arrDivInfo.push({
        'id':'record_devstatus',
        'name':'设备状态变更记录',
        'url':'page/record_devstatus.html'
    });
    arrDivInfo.push({
        'id':'record_gps',
        'name':'GPS记录',
        'url':'page/record_gps.html'
    });
    arrDivInfo.push({
        'id':'record_lockopenreset',
        'name':'开锁重置记录',
        'url':'page/record_lockopenreset.html'
    });
    arrDivInfo.push({
        'id':'record_lockstatus',
        'name':'锁状态变更记录',
        'url':'page/record_lockstatus.html'
    });

    return arrDivInfo;
}

// 配送信息
function initDistInfoChild() {
    var arrDivInfo = new Array();

    arrDivInfo.push({
        'id':'distinfo',
        'name':'配送信息',
        'url':'page/distinfo.html'
    });

    return arrDivInfo;
}

// 基础数据
function initBaseDataChild()
{
	var arrDivInfo = new Array();

    arrDivInfo.push({
        'id':'basedata_emcard',
        'name':'应急卡',
        'url':'page/basedata_emcard.html'
    });
    arrDivInfo.push({
        'id':'basedata_ioocard',
        'name':'出入库卡',
        'url':'page/basedata_ioocard.html'
    });
    arrDivInfo.push({
        'id':'basedata_ioodev',
        'name':'出入库设备',
        'url':'page/basedata_ioodev.html'
    });
    arrDivInfo.push({
        'id':'basedata_macard',
        'name':'管理卡',
        'url':'page/basedata_macard.html'
    });
    arrDivInfo.push({
        'id':'basedata_oildepot',
        'name':'油库',
        'url':'page/basedata_oildepot.html'
    });

	return arrDivInfo;
}

// 日志管理
function initLogManageChild() {
    var arrDivInfo = new Array();

    arrDivInfo.push({
        'id':'log',
        'name':'查看日志',
        'url':'/messages?'// + new Date().getTime()
    });
    arrDivInfo.push({
        'id':'log_clean',
        'name':'清空日志',
        'url':'/action/log_clean'
    });

    return arrDivInfo;
}

function initMenu()
{
	var strHtml	= '';
	for (var iIndex = 0; iIndex < g_arrDivInfo.length; ++iIndex)
	{
		strHtml += initMenuHtml(g_arrDivInfo[iIndex]);
	}

	$("menuInfo").innerHTML = strHtml;
}

function initMenuHtml(oMenuInfo)
{
	if (null == oMenuInfo)
	{
		return;
	}

	var strHtml = '';
	strHtml += "<div class=\"left_center_top\" id=\"top" + oMenuInfo.id + "\" onclick=\"showMenuTop('" + oMenuInfo.id + "')\">";
	strHtml += "<span>" + oMenuInfo.name + "</span>";
	strHtml += "</div>";
	strHtml += "<div class=\"left_center_top_center_child_div\" id=\"topChild" + oMenuInfo.id + "\">";
	strHtml += "<div class=\"left_center_top_center_child\">";
	strHtml += "<ul>";

	var arrChild = oMenuInfo.child;
	if (arrChild != null)
	{
		for (var iIndex = 0; iIndex < arrChild.length; ++iIndex)
		{
			strHtml += "<div class=\"left_center_top_center_child_li\"  id=\"node" + arrChild[iIndex].id + "\">";
			strHtml += "<li src=\"" + arrChild[iIndex].url + "\" onclick=\"showMenu('" + arrChild[iIndex].id + "')\">&middot;" + arrChild[iIndex].name + "</li>";
			strHtml += "</div>";
		}
	}

	strHtml	+= "</ul>";
	strHtml	+= "</div>";
	strHtml	+= "</div>";

	return strHtml;
}

// 子菜单
function showMenu(strDivName)
{
	var 	arrChild;
	var		strTitle;
	var		strChildTitle;
	var		strUrl;

	for (var iIndex = 0; iIndex < g_arrDivInfo.length; ++iIndex)
	{
		arrChild = g_arrDivInfo[iIndex].child;
		if (null != arrChild)
		{
			for (var iIndexChild = 0; iIndexChild < arrChild.length; ++iIndexChild)
			{
				if (arrChild[iIndexChild].id == strDivName)
				{
					strTitle = g_arrDivInfo[iIndex].name;
					strChildTitle = arrChild[iIndexChild].name;
					strUrl = arrChild[iIndexChild].url;
				}
				if ($('node' + arrChild[iIndexChild].id))
				{
					$('node' + arrChild[iIndexChild].id).className = 'left_center_top_center_child_li';
				//	_$('node' + arrChild[iIndexChild].id).style.backgroundColor = '#FFF';
				}
			}
		}
	}

	if ($('node' + strDivName))
	{
	//	_$('node' + strDivName).style.backgroundColor = '#BBDDFF';
		$('node' + strDivName).className = 'left_center_top_center_child_li_check';
	}

	$('parent_title').innerHTML = strTitle;
	$('child_title').innerHTML = strChildTitle;

    if ("log_clean" == strDivName)
    {
        ajaxPost(strUrl, function (response)
        {
            if (response.errno < 0)
            {
                alert(response.errmsg);
                return;
            }
            alert("成功清空日志！");
            $('nodelog_clean').className = 'left_center_top_center_child_li';
            $('nodelog').className = 'left_center_top_center_child_li_check';
            $('child_title').innerHTML = "查看日志";
            $('right_main').src = "/messages";
        });
        return;
    }

    $('right_main').src = strUrl;
}

function ajaxPost(url, successFn) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) { // 4 = "loaded"
            if (xmlhttp.status == 200) { // 200 = "OK"
                var response = JSON.parse(xmlhttp.responseText);
                successFn(response);
            } else {
                alert("http connection error: status[" + xmlhttp.status + "], " + xmlhttp.statusText);
            }
        }
    }
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("");
}

// 顶部菜单
function showMenuTop(strDivName)
{

	var iIndex = 0;

	for (iIndex = 0; iIndex < g_arrDivInfo.length; ++iIndex)
	{
		if (strDivName != g_arrDivInfo[iIndex].id)
		{
			if ($('topChild' + g_arrDivInfo[iIndex].id))
			{
				$('topChild' + g_arrDivInfo[iIndex].id).style.display = 'none';
			}
			if ($('top' + g_arrDivInfo[iIndex].id))
			{
				$('top' + g_arrDivInfo[iIndex].id).className = 'left_center_top';
			}
		}
	}
	if($('topChild' + strDivName))
	{
		if ($('topChild' + strDivName).style.display == 'block')
		{
			$('topChild' + strDivName).style.display = 'none';
			if ($('top' + strDivName))
			{
				$('top' + strDivName).className = 'left_center_top';
			}
		}
		else
		{
			$('topChild' + strDivName).style.display = 'block';
			if ($('top' + strDivName))
			{
				$('top' + strDivName).className = 'left_center_top_act';
			}
		}
	}
}

// 分隔符功能
var iShow	= 1;
function execSeparator()
{
	if (0 == iShow)
	{
		// 显示
		document.getElementById('areaLeft').style.display = 'block';
		document.getElementById('areaRight').style.left = '240px';
		document.getElementById('Separator').style.background = 'url(img/sep_open.gif)';
		iShow = 1;
	}
	else
	{
		document.getElementById('areaLeft').style.display = 'none';
		document.getElementById('areaRight').style.left = '0px';
		document.getElementById('Separator').style.background = 'url(img/sep_close.gif)';
		iShow = 0;
	}
}

// 重启
function resetSystem()
{
	var bResult = confirm('提示：确定需要重启设备？');

	if (!bResult)
	{
		return;
	}

	var ajaxHtml = new ajax();
	ajaxHtml.request({
		type:'get',
		url:'/sysreboot',
		success:function(strData)
		{
			var boxProgress = new Box('ResetProgress');
			boxProgress.showAutoProgress('请等待重启！', true, true, 20,
				function(){
					location.reload(true);
				});
		}
	});

}
