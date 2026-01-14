"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageSchema = void 0;
const zod_1 = require("zod");
exports.createMessageSchema = zod_1.z.object({
    text: zod_1.z.string().min(1).max(500),
    user: zod_1.z.string().min(1).max(100),
});
//# sourceMappingURL=app.interface.js.map