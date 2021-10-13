
type MessageType = 'image' | 'audio' | string; // 消息类型
interface Message  {
    id: number;
    type: MessageType;
    sendmessage: string;
}
const message: Message[] = [
    {
        id: 1, type: 'audio', sendmessage: '今朝有酒今朝醉'
    },
    {
        id: 2, type: 'image', sendmessage: '这是一个图片'
    },
    {
        id: 3, type: 'audio', sendmessage: '今朝有酒今朝醉'
    }
]


function getMessage(id: number): Message
function getMessage(messageType: MessageType): Message[]
function getMessage(value: MessageType | number){
    if(typeof value === "number"){
        return message.find(ret => ret.id === value)
    }else{
        return message.filter(ret => ret.type === value)
    }
}
getMessage('')