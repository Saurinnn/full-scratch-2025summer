"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const infinitescroll_1 = __importDefault(require("@kreonovo/infinitescroll"));
window.addEventListener("DOMContentLoaded", () => {
    // ... loadingText などの処理 ...
    const gallery = document.getElementById("gallery");
    const options = { duration: 15, disableMask: true, direction: "left" };
    new infinitescroll_1.default(gallery, options);
});
