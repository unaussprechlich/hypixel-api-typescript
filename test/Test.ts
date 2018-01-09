import * as HypixelAPI from "../index"

import { expect } from 'chai';
import { suite, test, slow, timeout } from "mocha-typescript";
import UUID from "../src/UUID";
import {Player} from "../src/response/PlayerResponse";

const USERNAME = 'unaussprechlich';
const UUID_STR = '4064d7ecc2124a1cb252ecc0403a2824';
const UUID_CONST = UUID.fromShortString(UUID_STR);
const GUILD_ID = "587eae890cf23f1ace3bed99";
const GUILD_TAG = "SHADOW";

const API_KEY_STRING = process.env.API_KEY;

if(API_KEY_STRING == null) throw Error("Missing ApiKey!");
const API_KEY = UUID.fromString(API_KEY_STRING.toString());

const RANDOM_UUID = UUID.fromString("851f96b9-51be-4eaf-9b2e-8d303111fe07");

@suite class TestHypixelAPI{

    @test("API_KEY", timeout(5000))
    public testApiKey(){
        throw (API_KEY_STRING);
    }

    @test("API_KEY_2", timeout(5000))
    public testApiKey2(){
        throw (API_KEY.toString());
    }

    @test("PlayerRequest by Name", timeout(5000))
    public async playerRequestByName(){
        const playerByName = await HypixelAPI.getPlayerByName(USERNAME, API_KEY);
        expect(playerByName.uuid).to.equal(UUID_STR);
    }

    @test("PlayerRequest by UUID", timeout(5000))
    public async playerRequestByUuid(){
        const playerByUuid = await HypixelAPI.getPlayerByUuid(UUID_CONST, API_KEY);
        expect(playerByUuid.displayname).to.equal(USERNAME);
    }

    @test("FindGuildRequest by Name", timeout(5000))
    public async findGuildByName(){
        const guildID = await HypixelAPI.findGuildIdByPlayerName(USERNAME, API_KEY);
        expect(guildID).to.equal(GUILD_ID);
    }

    @test("FindGuildRequest by UUID", timeout(5000))
    public async findGuildByUuid(){
        const guildID = await HypixelAPI.findGuildIdByPlayerUuid(UUID_CONST, API_KEY);
        expect(guildID).to.equal(GUILD_ID);
    }

    @test("GuildRequest by ID", timeout(5000))
    public async guildRequestById(){
        const guildByUuid = await HypixelAPI.getGuildById(GUILD_ID, API_KEY);
        expect(guildByUuid.tag).to.equal(GUILD_TAG);
    }

    @test("GuildRequest by NAME", timeout(5000))
    public async guildRequestByName(){
        const guildByUuid = await HypixelAPI.getGuildByPlayerName(USERNAME, API_KEY);
        expect(guildByUuid.tag).to.equal(GUILD_TAG);
    }

    @test("GuildRequest by UUID", timeout(5000))
    public async guildRequestByUuid(){
        const guildByUuid = await HypixelAPI.getGuildByPlayerUuid(UUID_CONST, API_KEY);
        expect(guildByUuid.tag).to.equal(GUILD_TAG);
    }

    @test("Request with invalid API-Key")
    public geyKeyInvalid(done){
        HypixelAPI.getKey(RANDOM_UUID).then(value => done(value)).catch(err => done());
    }

    @test("Request valid API-Key")
    public async getKeyValid() {
        const respond = await HypixelAPI.getKey(API_KEY);
        expect(respond.ownerUuid).to.equal(UUID_STR);
    }




}