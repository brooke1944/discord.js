module.exports = {
  Client: require('./client/Client'),
  WebhookClient: require('./client/WebhookClient'),
  Shard: require('./sharding/Shard'),
  ShardClientUtil: require('./sharding/ShardClientUtil'),
  ShardingManager: require('./sharding/ShardingManager'),

  Collection: require('./util/Collection'),
  splitMessage: require('./util/SplitMessage'),

  Channel: require('./structures/Channel'),
  ClientUser: require('./structures/ClientUser'),
  DMChannel: require('./structures/DMChannel'),
  Emoji: require('./structures/Emoji'),
  EvaluatedPermissions: require('./structures/EvaluatedPermissions'),
  Game: require('./structures/Presence').Game,
  GroupDMChannel: require('./structures/GroupDMChannel'),
  Guild: require('./structures/Guild'),
  GuildChannel: require('./structures/GuildChannel'),
  GuildMember: require('./structures/GuildMember'),
  Invite: require('./structures/Invite'),
  Message: require('./structures/Message'),
  MessageAttachment: require('./structures/MessageAttachment'),
  MessageCollector: require('./structures/MessageCollector'),
  MessageEmbed: require('./structures/MessageEmbed'),
  PartialGuild: require('./structures/PartialGuild'),
  PartialGuildChannel: require('./structures/PartialGuildChannel'),
  PermissionOverwrites: require('./structures/PermissionOverwrites'),
  Presence: require('./structures/Presence').Presence,
  Role: require('./structures/Role'),
  TextChannel: require('./structures/TextChannel'),
  User: require('./structures/User'),
  VoiceChannel: require('./structures/VoiceChannel'),
  Webhook: require('./structures/Webhook'),

  version: require('../package').version,
};
