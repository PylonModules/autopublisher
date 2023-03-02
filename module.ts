import * as config from '../config';

discord.on(discord.Event.MESSAGE_CREATE, async (message) => {
  if (config.autopublisher.channels.includes(message.channelId)) {
    var channel = await discord.getGuildNewsChannel(message.channelId);
    if (!channel)
      throw new Error(
        '[AUTOPUBLISHER] Channel with id ' +
          message.channelId +
          ' is not a news channel.'
      );
    channel.publishMessage(message.id);
    message
      .inlineReply(
        'Successfully published message!\n\n*This message will delete in 3 seconds*'
      )
      .then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 3000);
      });
      
  }
});
