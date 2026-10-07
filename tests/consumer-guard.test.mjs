import test from "node:test";
import assert from "node:assert/strict";
import { validateStrategyRequest } from "../skills/marketing-strategy/scripts/consumer-guard.mjs";
const valid = { consumer: "marketing", capability: "marketing.strategy", mode: "analysis", external_effect: false };
for (const consumer of ["marketing", "ads"]) for (const mode of ["analysis", "draft"]) {
  test(`${consumer} ${mode} eligible without execution permission`, () => {
    const result = validateStrategyRequest({ ...valid, consumer, mode });
    assert.equal(result.eligible, true);
    assert.equal(result.execution_authorized, false);
    assert.equal(Object.isFrozen(result), true);
  });
}
for (const mode of ["publish", "send", "spend", "targeting", "payment", "accept", "UNKNOWN", undefined]) {
  test(`reject effect/unknown mode ${mode}`, () => assert.throws(() => validateStrategyRequest({ ...valid, mode })));
}
for (const consumer of ["sales", "customer-service", "Ads", "", undefined]) {
  test(`reject ineligible consumer ${consumer}`, () => assert.throws(() => validateStrategyRequest({ ...valid, consumer })));
}
for (const external_effect of [true, "false", null, undefined]) {
  test(`reject effect flag ${external_effect}`, () => assert.throws(() => validateStrategyRequest({ ...valid, external_effect })));
}
test("unsupported capability cannot bypass guard", () => assert.throws(() => validateStrategyRequest({ ...valid, capability: "ads.campaign.create" })));
test("unknown field cannot smuggle permission", () => assert.throws(() => validateStrategyRequest({ ...valid, authority: true })));
test("null and array requests fail closed", () => { assert.throws(() => validateStrategyRequest(null)); assert.throws(() => validateStrategyRequest([])); });
