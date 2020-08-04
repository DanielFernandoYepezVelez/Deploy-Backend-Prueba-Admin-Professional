"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hospitalSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
class HospitalSchema {
    createHospitalSchema() {
        return joi_1.default.object({
            name: joi_1.default.string().min(3).max(50).required(),
            image: joi_1.default.string(),
        });
    }
    updateHospitalSchema() {
        return joi_1.default.object({
            name: joi_1.default.string().min(3).max(50).required(),
        });
    }
}
exports.hospitalSchema = new HospitalSchema();
