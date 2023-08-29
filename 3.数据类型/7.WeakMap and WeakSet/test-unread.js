// 存储 "unread" 标识
/*
一个messages数组
要求：
    编写代码可以访问它，但是message是由其他人的代码管理的。该代码会定期添加新消息，删除旧消息，但是不知道这些操作确切的发生时间
    使用合适的数据结构来保存关于消息“是否已读”的信息，该结构必须很适合对给定的 message 对象给出“它读了吗？”的答案
    P.S. 当一个消息被从 messages 中删除后，它应该也从现在的数据结构中消失
    不能修改 message 对象，例如向其添加属性
*/
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log("read message 0:" + readMessages.has(messages[0]));

messages.shift();
