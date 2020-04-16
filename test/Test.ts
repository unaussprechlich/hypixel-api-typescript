import * as HypixelAPI from "../index";

import { expect } from 'chai';
import { suite, test, timeout } from "mocha-typescript";
import UUID from "../src/UUID";
import {HypixelException} from "../src/Exceptions";

const USERNAME = 'unaussprechlich';
const UUID_STR = '4064d7ecc2124a1cb252ecc0403a2824';
const UUID_CONST = UUID.fromShortString(UUID_STR);
const GUILD_ID = "5b8c72d20cf24573ab84c83d";
const GUILD_TAG = "TRASH";

const API_KEY_STRING = process.env.API_KEY;

if(API_KEY_STRING == null) throw Error("Missing ApiKey!");
const API_KEY = UUID.fromString(API_KEY_STRING.toString());

const RANDOM_UUID = UUID.fromString("851f96b9-51be-4eaf-9b2e-8d303111fe07");

@suite(timeout(5000)) class TestHypixelAPI{

    @test
    public async playerRequestByName(){
        const playerByName = await HypixelAPI.getPlayerByName(USERNAME, API_KEY);
        expect(playerByName.uuid).to.equal(UUID_STR);
    }

    @test
    public async playerRequestByUuid(){
        const playerByUuid = await HypixelAPI.getPlayerByUuid(UUID_CONST, API_KEY);
        expect(playerByUuid.displayname).to.equal(USERNAME);
    }

    @test
    public async findGuildByName(){
        const guildID = await HypixelAPI.findGuildIdByPlayerName(USERNAME, API_KEY);
        expect(guildID).to.equal(GUILD_ID);
    }

    @test
    public async findGuildByUuid(){
        const guildID = await HypixelAPI.findGuildIdByPlayerUuid(UUID_CONST, API_KEY);
        expect(guildID).to.equal(GUILD_ID);
    }

    @test
    public async guildRequestById(){
        const guildByUuid = await HypixelAPI.getGuildById(GUILD_ID, API_KEY);
        expect(guildByUuid.tag).to.equal(GUILD_TAG);
    }

    @test
    public async guildRequestByName(){
        const guildByUuid = await HypixelAPI.getGuildByPlayerName(USERNAME, API_KEY);
        expect(guildByUuid.tag).to.equal(GUILD_TAG);
    }

    @test
    public async guildRequestByUuid(){
        const guildByUuid = await HypixelAPI.getGuildByPlayerUuid(UUID_CONST, API_KEY);
        expect(guildByUuid.tag).to.equal(GUILD_TAG);
    }

    @test
    public async geyKeyInvalid(){
        try {
            await HypixelAPI.getKey(RANDOM_UUID);
        } catch (e) {
            expect(e.message).to.equal("Invalid API key!")
        }

    }

    @test
    public async getKeyValid() {
        const response = await HypixelAPI.getKey(API_KEY);
        expect(response.ownerUuid).to.equal(UUID_STR);
    }




}
