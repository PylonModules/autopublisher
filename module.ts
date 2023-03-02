import * as config from '../config';

discord.on(discord.Event.MESSAGE_CREATE, async (message) => {
  if (!config.autopublisher.channels.includes(message.channelId)) return;
  if (message.content.includes('--nopublish')) return;
  
  var channel = await discord.getGuildNewsChannel(message.channelId);
  if (!channel)
    throw new Error(
      '[AUTOPUBLISHER] Channel with id ' +
        message.channelId +
        ' is not a news channel.'
    );
  channel.publishMessage(message.id);
});
