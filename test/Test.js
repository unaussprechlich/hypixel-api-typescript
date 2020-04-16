"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HypixelAPI = require("../index");
const chai_1 = require("chai");
const mocha_typescript_1 = require("mocha-typescript");
const UUID_1 = require("../src/UUID");
const USERNAME = 'unaussprechlich';
const UUID_STR = '4064d7ecc2124a1cb252ecc0403a2824';
const UUID_CONST = UUID_1.default.fromShortString(UUID_STR);
const GUILD_ID = "5b8c72d20cf24573ab84c83d";
const GUILD_TAG = "TRASH";
const API_KEY_STRING = process.env.API_KEY;
if (API_KEY_STRING == null)
    throw Error("Missing ApiKey!");
const API_KEY = UUID_1.default.fromString(API_KEY_STRING.toString());
const RANDOM_UUID = UUID_1.default.fromString("851f96b9-51be-4eaf-9b2e-8d303111fe07");
let TestHypixelAPI = class TestHypixelAPI {
    playerRequestByName() {
        return __awaiter(this, void 0, void 0, function* () {
            const playerByName = yield HypixelAPI.getPlayerByName(USERNAME, API_KEY);
            chai_1.expect(playerByName.uuid).to.equal(UUID_STR);
        });
    }
    playerRequestByUuid() {
        return __awaiter(this, void 0, void 0, function* () {
            const playerByUuid = yield HypixelAPI.getPlayerByUuid(UUID_CONST, API_KEY);
            chai_1.expect(playerByUuid.displayname).to.equal(USERNAME);
        });
    }
    findGuildByName() {
        return __awaiter(this, void 0, void 0, function* () {
            const guildID = yield HypixelAPI.findGuildIdByPlayerName(USERNAME, API_KEY);
            chai_1.expect(guildID).to.equal(GUILD_ID);
        });
    }
    findGuildByUuid() {
        return __awaiter(this, void 0, void 0, function* () {
            const guildID = yield HypixelAPI.findGuildIdByPlayerUuid(UUID_CONST, API_KEY);
            chai_1.expect(guildID).to.equal(GUILD_ID);
        });
    }
    guildRequestById() {
        return __awaiter(this, void 0, void 0, function* () {
            const guildByUuid = yield HypixelAPI.getGuildById(GUILD_ID, API_KEY);
            chai_1.expect(guildByUuid.tag).to.equal(GUILD_TAG);
        });
    }
    guildRequestByName() {
        return __awaiter(this, void 0, void 0, function* () {
            const guildByUuid = yield HypixelAPI.getGuildByPlayerName(USERNAME, API_KEY);
            chai_1.expect(guildByUuid.tag).to.equal(GUILD_TAG);
        });
    }
    guildRequestByUuid() {
        return __awaiter(this, void 0, void 0, function* () {
            const guildByUuid = yield HypixelAPI.getGuildByPlayerUuid(UUID_CONST, API_KEY);
            chai_1.expect(guildByUuid.tag).to.equal(GUILD_TAG);
        });
    }
    geyKeyInvalid() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield HypixelAPI.getKey(RANDOM_UUID);
            }
            catch (e) {
                chai_1.expect(e.message).to.equal("Invalid API key!");
            }
        });
    }
    getKeyValid() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield HypixelAPI.getKey(API_KEY);
            chai_1.expect(response.ownerUuid).to.equal(UUID_STR);
        });
    }
};
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "playerRequestByName", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "playerRequestByUuid", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "findGuildByName", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "findGuildByUuid", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "guildRequestById", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "guildRequestByName", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "guildRequestByUuid", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "geyKeyInvalid", null);
__decorate([
    mocha_typescript_1.test
], TestHypixelAPI.prototype, "getKeyValid", null);
TestHypixelAPI = __decorate([
    mocha_typescript_1.suite(mocha_typescript_1.timeout(5000))
], TestHypixelAPI);
//# sourceMappingURL=Test.js.map