"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = __importDefault(require("../models/task"));
var list_1 = __importDefault(require("../models/list"));
var tasksController = {
    createTask: function (_a, res) {
        var _b = _a.body, listId = _b.listId, taskData = _b.taskData;
        return __awaiter(void 0, void 0, void 0, function () {
            var createdCard, updatedList, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, task_1.default.create(taskData)];
                    case 1:
                        createdCard = _c.sent();
                        console.log(createdCard);
                        return [4 /*yield*/, list_1.default.findByIdAndUpdate(listId, {
                                $push: { tasks: createdCard },
                            }, { new: true, useFindAndModify: false })];
                    case 2:
                        updatedList = _c.sent();
                        res.send(updatedList).status(200);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        console.error(error_1);
                        res.send(error_1).status(500);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    modifyTask: function (_a, res) {
        var _b = _a.body, listId = _b.listId, taskData = _b.taskData;
        return __awaiter(void 0, void 0, void 0, function () {
            var updatedList, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, list_1.default.findOneAndUpdate({ _id: listId, "tasks._id": taskData.id }, { $set: { "tasks.$": taskData } }, { new: true, useFindAndModify: false })];
                    case 1:
                        updatedList = _c.sent();
                        res.send(updatedList).status(200);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _c.sent();
                        console.error(error_2);
                        res.send(error_2).status(500);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    removeTask: function (_a, res) {
        var _b = _a.body, listId = _b.listId, taskId = _b.taskId;
        return __awaiter(void 0, void 0, void 0, function () {
            var deletedList, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, list_1.default.findOneAndUpdate({ _id: listId, "tasks._id": taskId }, {
                                $pull: {
                                    tasks: { _id: taskId },
                                },
                            }, { new: true, useFindAndModify: false })];
                    case 1:
                        deletedList = _c.sent();
                        res.send(deletedList).status(200);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _c.sent();
                        console.error(error_3);
                        res.send(error_3).status(500);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    moveTask: function (_a, res) {
        var _b = _a.body, fromListId = _b.fromListId, toListId = _b.toListId, taskData = _b.taskData;
        return __awaiter(void 0, void 0, void 0, function () {
            var oldList, createdCard, newList, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, list_1.default.findOneAndUpdate({ _id: fromListId, "tasks._id": taskData.id }, {
                                $pull: {
                                    tasks: { _id: taskData.id },
                                },
                            }, { new: true, useFindAndModify: false })];
                    case 1:
                        oldList = _c.sent();
                        return [4 /*yield*/, task_1.default.create(taskData)];
                    case 2:
                        createdCard = _c.sent();
                        return [4 /*yield*/, list_1.default.findByIdAndUpdate(toListId, {
                                $push: { tasks: createdCard },
                            }, { new: true, useFindAndModify: false })];
                    case 3:
                        newList = _c.sent();
                        res.send({ oldList: oldList, newList: newList });
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _c.sent();
                        console.error(error_4);
                        res.send(error_4).status(500);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
};
module.exports = tasksController;
