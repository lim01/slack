//slack.js 
const Slack = require('slack-node');
const webhookUri = "https://hooks.slack.com/services/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"; 
const slack = new Slack();
slack.setWebhook(webhookUri);
slack.webhook({ 
    channel: "#일반", 
    // 현 슬랙의 채널 username: "웹훅", 
    // 슬랙에서 보여질 웹훅 이름 
    text: "NodeJS 에서 전송한 메시지" //텍스트 
}, function (err, response) { 
    console.log(response); 
});