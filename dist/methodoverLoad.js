"use strict";
var message = [
    {
        id: 1, type: 'audio', sendmessage: '今朝有酒今朝醉'
    },
    {
        id: 2, type: 'image', sendmessage: '这是一个图片'
    },
    {
        id: 3, type: 'audio', sendmessage: '今朝有酒今朝醉'
    }
];
function getMessage(value) {
    if (typeof value === "number") {
        return message.find(function (ret) { return ret.id === value; });
    }
    else {
        return message.filter(function (ret) { return ret.type === value; });
    }
}
getMessage('');
