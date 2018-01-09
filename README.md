<p align="center" style="text-align: center;"><img src="https://api.hypixel.net/assets/images/logo.png" width="300" alt="Hypixel logo"/></p>


[GitHub](https://github.com/unaussprechlich/hypixel-api) | [NPM](https://www.npmjs.com/package/hypixel-api-typescript) 

[![Build Status](https://travis-ci.org/unaussprechlich/Hypixel-API-typescript.svg?branch=master)](https://travis-ci.org/unaussprechlich/Hypixel-API-typescript)

### This package is a wrapper for [https://api.hypixel.net](https://api.hypixel.net) written in Typescript. 

All requests are returned as parsed Typescript interfaces and so gone is the time, where you have to constantly check the names of the values you actually need. If there are any values the Interface does not contain, then open a issue or Pullrequest on [GitHub](“https://github.com/unaussprechlich/hyixel-api”). 
Also a huge shoutout to [ethanent](https://github.com/ethanent) from where I forked this repository, so that I have a base to work with.

## Installation

```shell
npm install --save hypixel-api-typescript
```

## Usage

> Import the HypixelAPI and store your Hypixel API-key as a UUID.

```typescript
import * as HypixelAPI from 'hypixel-api-typescript';

const API_KEY = UUID.fromString("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx")
```

### Getting player information


```typescript
//by NAME
const playerByName = await HypixelAPI.getPlayerByName("unaussprechlich", API_KEY);

//by UUID
const uuid = UUID.fromShortString("4064d7ecc2124a1cb252ecc0403a2824");
const playerByName = await HypixelAPI.getPlayerByUuid(uuid, API_KEY);
```

### Finding guilds

> A GuildID can be found from a member's UUID or name.

```typescript
//by NAME
const guildIdByMemberName = await HypixelAPI.findGuildIdByPlayerName("unaussprechlich", API_KEY);

//by UUID
const uuid = UUID.fromShortString("4064d7ecc2124a1cb252ecc0403a2824");
const guildIdByMemberUuid = await HypixelAPI.findGuildIdByPlayerUuid(uuid, API_KEY);
```

> With the GuildID you can request the Guild.

```typescript
const guild = await HypixelAPI.getGuildById(guildIdByMemberUuid, API_KEY);
```

> HypixelAPI can also return the Guild directly.

```typescript
//by NAME
const guildByMemberName = await HypixelAPI.getGuildByPlayerName("unaussprechlich", API_KEY);

//by UUID
const uuid = UUID.fromShortString("4064d7ecc2124a1cb252ecc0403a2824");
const guildByMemberUuid = await HypixelAPI.getGuildByIPlayerUuid(uuid, API_KEY);
```

### Getting booster information

> This does return all active an queued Boosters. 

```typescript
const boosters = await HypixelAPI.getBoosters(API_KEY);
```

You can also check if Hypixel has paused the Booster queue.

```typescript
const isQueueStopped = await HypixelAPI.getBoostersIsDecrementing(API_KEY);
```

### Getting the leaderboards

> The HypixelAPI can request the leaderboards you find in each Gamelobby.

```typescript
const leaderboards = await HypixelAPI.getLeaderboards(API_KEY);
```

### Getting informations about your API-key

> The HypixelAPI can request the leaderboards you find in each Gamelobby.

```typescript
const key = await HypixelAPI.getKey(API_KEY);
```

## API Response

* [Player](https://github.com/unaussprechlich/Hypixel-API-typescript/tree/master/src/response/PlayerResponse.ts)
* [Guild](https://github.com/unaussprechlich/Hypixel-API-typescript/tree/master/src/response/GuildResponse.ts)
* [FindGuild](https://github.com/unaussprechlich/Hypixel-API-typescript/tree/master/src/response/FindGuildResponse.ts)
* [Boosters](https://github.com/unaussprechlich/Hypixel-API-typescript/blob/master/src/response/BoostersResponse.ts)
* [Key](https://github.com/unaussprechlich/Hypixel-API-typescript/blob/master/src/response/KeyResponse.ts)
* [Leaderboards](https://github.com/unaussprechlich/Hypixel-API-typescript/tree/master/src/response/LeaderboardsResponse.ts)
