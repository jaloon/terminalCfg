/**
 * 根据元素ID获取页面元素
 * @param {string} elementId 元素ID
 * @returns {HTMLElement | null} 页面元素
 */
function _$(elementId) {
    return document.getElementById(elementId);
}

/**
 * 为页面元素绑定事件
 * @param {HTMLElement} element 页面元素
 * @param {string} event 事件名称
 * @param {function} fn 事件处理函数
 */
function bindEvent(element, event, fn) {
    if (element.addEventListener) {
        // 现代浏览器
        element.addEventListener(event, fn);
    } else if (element.attchEvent) {
        // IE8及更早版本和Opear 7.0及更早版本
        element.attchEvent(event, fn);
    }
}

/**
 * IP校验
 * @param {string} ip IP地址
 * @returns {boolean} 是否符合IP格式
 */
function isIP(ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    return reg.test(ip);
}

/**
 * 时间秒数格式化为日期时间字符串形式
 * @param {number} second 时间秒数
 * @returns {string} 日期时间字符串
 */
function formatDateTime(second) {
    if (0 == second) {
        return '-';
    }

    var date = new Date(second * 1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

/**
 * 创建XMLHttpRequest
 * @returns {XMLHttpRequest}
 */
function createXmlHttp() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

/**
 * ajax get 请求
 * @param {string} url 请求路径
 * @param {function} successFn 请求成功的回调函数
 */
function ajaxGet(url, successFn) {
    var xmlhttp = createXmlHttp();
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
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

/**
 * ajax post 请求
 * @param {string} url 请求路径
 * @param {function} successFn 请求成功的回调函数
 */
function ajaxPost(url, data, successFn) {
    var xmlhttp = createXmlHttp();
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
    xmlhttp.send(data);
}

/**
 * 功能是否启用
 * @param enable 功能是否启用值
 * @returns {string} 关闭/启用
 */
function funcEnable(enable) {
    return enable == 0 ? "关闭" : "启用";
}

/**
 * 锁类型
 * @param type 锁类型值
 * @returns {string} 锁类型
 */
function parseLockType(type) {
    if (type == 1) {
        return "上仓锁";
    } else if (type == 0) {
        return "下仓锁";
    } else {
        return "未知(" + type + ")";
    }
}

/**
 * 锁是否可打开
 * @param open
 * @returns {string}
 */
function parseLockCanOpen(open) {
    if (open == 1) {
        return "不可打开";
    } else if (open == 2) {
        return "可打开";
    } else {
        return "未知(" + open + ")";
    }
}

/**
 * 锁绑定状态
 * @param bind
 * @returns {string}
 */
function parseLockBind(bind) {
    if (bind == 1) {
        return "新锁";
    } else if (bind == 2) {
        return "同步成功";
    } else {
        return "未知(" + bind + ")";
    }
}

/**
 * 锁操作类型
 * @param {number} optype 锁操作类型值
 * @returns {string} 锁操作类型
 */
function parseLockOptType(optype) {
    switch (optype) {
        case 1:
            return "开";
        case 2:
            return "关";
        default:
            return "未知(" + optype + ")";
    }
}

/**
 * 锁开关状态
 * @param {number} status 锁开关状态值
 * @returns {string} 锁开关状态
 */
function parseLockSwitchStatus(status) {
    if (status == 0) {
        return "关锁";
    } else if (status == 1) {
        return "开锁";
    } else {
        return "未知(" + status + ")";
    }
}

/**
 * 是否报警
 * @param {number} alarm 报警状态值
 * @returns {string} 是否报警
 */
function parseLockIsAlarm(alarm) {
    if (alarm == 0) {
        return "无";
    } else if (alarm == 1) {
        return "报警";
    } else {
        return "未知(" + alarm + ")";
    }
}

/**
 * 锁打开状态
 * @param {number} open 锁打开状态值
 * @returns {string} 锁打开状态
 */
function parseLockOpenStatus(open) {
    switch (open) {
        case 0:
            return "未开启";
        case 1:
            return "本次解封已开启";
        case 2:
            return "之前解封已开启";
        default:
            return "未知(" + open + ")";
    }
}

/**
 * 远程操作类型
 * @param {number} optype 操作类型值
 * @returns {string} 操作类型
 */
function parseRemoteOptType(optype) {
    switch (optype) {
        case 1:
            return "入库";
        case 2:
            return "出库";
        case 3:
            return "进加油站";
        case 4:
            return "出加油站";
        case 5:
            return "进入应急";
        case 6:
            return "退出应急";
        case 7:
            return "强制变更";
        case 8:
            return "油区外";
        case 9:
            return "进油区";
        case 10:
            return "出油区";
        default:
            return "未知(" + optype + ")";
    }
}

/**
 * 设备类型
 * @param {number} devtype 设备类型值
 * @returns {string} 设备类型
 */
function parseDevType(devtype) {
    if (devtype == 1) {
        return "车台";
    } else if (devtype == 2) {
        return "锁";
    } else {
        return "未知(" + devtype + ")";
    }
}

/**
 * 报警类型
 * @param {number} devtype 设备类型值
 * @param {number} alarmtype 报警类型值
 * @returns {string} 报警类型
 */
function parseAlarmType(devtype, alarmtype) {
    if (devtype == 1) {
        if (0 == alarmtype) {
            return "无报警";
        }
        var alarm = "";
        if ((alarmtype & 1) > 0) {
            alarm += "；未施封越界";
        }
        if (((alarmtype >> 1) & 1) > 0) {
            alarm += "；时钟电池报警";
        }
        if ((alarmtype >> 2) != 0) {
            alarm += "；未知(" + (alarmtype & 0b11111100) + ")";
        }
        return alarm.slice(1);
    }
    if (devtype == 2) {
        if (0 == alarmtype) {
            return "无报警";
        }
        var alarm = "";
        if ((alarmtype & 1) > 0) {
            alarm += "；通讯异常";
        }
        if (((alarmtype >> 1) & 1) > 0) {
            alarm += "；电池低电压";
        }
        if (((alarmtype >> 2) & 1) > 0) {
            alarm += "；异常开锁";
        }
        if (((alarmtype >> 3) & 1) > 0) {
            alarm += "；进入应急";
        }
        if (((alarmtype >> 4) & 1) > 0) {
            alarm += "；异常移动";
        }
        if ((alarmtype >> 5) != 0) {
            alarm += "；未知(" + (alarmtype & 0b11100000) + ")";
        }
        return alarm.slice(1);
    }
    return "未知(" + devtype + "-" + alarmtype + ")";
}

/**
 * 认证类型
 * @param {number} authtype 认证类型值
 * @returns {string} 认证类型
 */
function parseAuthType(authtype) {
    switch (authtype) {
        case 0:
            return "其他方式";
        case 1:
            return "出入库读卡器";
        case 2:
            return "出入库卡";
        case 3:
            return "手持机";
        case 4:
            return "普通卡";
        case 5:
            return "应急卡";
        case 6:
            return "远程操作";
        case 7:
            return "操作员";
        default:
            return "未知(" + authtype + ")";
    }
}

/**
 * 站点类型
 * @param {number} stationtype 站点类型值
 * @returns {string} 站点类型
 */
function parsseStationType(stationtype) {
    if (stationtype == 1) {
        return "油库";
    } else if (stationtype == 2) {
        return "加油站";
    } else if (stationtype == 0) {
        return "-"
    } else {
        return "未知(" + stationtype + ")";
    }
}

/**
 * GPS是否有效
 * @param {number} gps_valid GPS有效状态值
 * @returns {string} GPS是否有效（无效/有效）
 */
function validGps(gps_valid) {
    if (gps_valid == 0) {
        return "无效";
    } else if (gps_valid == 1) {
        return "有效";
    } else {
        return "未知(" + gps_valid + ")";
    }
}

/**
 * 车辆状态
 * @param {number} devstatus 车辆状态值
 * @returns {string} 车辆状态
 */
function parseDevStatus(devstatus) {
    switch (devstatus) {
        case 1:
            return "在油库";
        case 2:
            return "在途";
        case 3:
            return "在加油站";
        case 4:
            return "返程";
        case 5:
            return "应急";
        case 6:
            return "油区外";
        case 7:
            return "在油区";
        default:
            return "未知(" + devstatus + ")";
    }
}

/**
 * 上传状态
 * @param {number} uploadstatus 上传状态值
 * @returns {string} 上传状态
 */
function parseUploadStatus(uploadstatus) {
    switch (uploadstatus) {
        case 0:
            return "未上传";
        case 1:
            return "上传中";
        case 2:
            return "已上传";
        default:
            return "未知(" + uploadstatus + ")";
    }
}

/**
 * 上传通道
 * @param {number} uploadtype 上传通道值
 * @returns {string} 上传通道
 */
function parseUploadChannel(uploadtype) {
    switch (uploadtype) {
        case 0:
            return "无";
        case 1:
            return "无线网络";
        case 2:
            return "自组网";
        default:
            return "未知(" + uploadtype + ")";
    }
}

/**
 * 卡类型
 * @param {number} type 卡类型值
 * @returns {string} 卡类型
 */
function parseType(type) {
    switch (type) {
        case 2:
            return "入库卡";
        case 3:
            return "出库卡";
        case 4:
            return "出入库卡";
        default:
            return "未知(" + type + ")";
    }
}

/**
 * 读卡器类型
 * @param {number} type 读卡器类型值
 * @returns {string} 读卡器类型
 */
function parseReaderType(type) {
    switch (type) {
        case 1:
            return "入库读卡器";
        case 2:
            return "出库读卡器";
        case 3:
            return "出入库读卡器";
        default:
            return "未知(" + type + ")";
    }
}

/**
 * 配送状态
 * @param {number} status 配送状态值
 * @returns {string} 配送状态
 */
function parseDistStatus(status) {
    if (status == 0) {
        return "未配送";
    } else if (status == 1) {
        return "已配送";
    } else if (status == 2) {
        return "已上传";
    } else {
        return "未知(" + status + ")";
    }
}

/**
 * 字符串null处理
 * @param {number} value 字符串值
 * @returns {string} 处理后的字符串
 */
function isNullByStr(value) {
    if (value == undefined || value == null) {
        return "-";
    }
    return value;
}