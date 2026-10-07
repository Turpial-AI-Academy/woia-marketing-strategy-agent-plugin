/** W3 routing eligibility only. Never grants authority or executes effects. */
export function validateStrategyRequest(request) {
  if (!request || typeof request !== "object" || Array.isArray(request)) throw new Error("request object required");
  const keys = new Set(["consumer", "capability", "mode", "external_effect"]);
  if (Object.keys(request).some(key => !keys.has(key))) throw new Error("unknown request field");
  if (!["marketing", "ads"].includes(request.consumer)) throw new Error("ineligible consumer");
  if (request.capability !== "marketing.strategy") throw new Error("unsupported capability");
  if (!["analysis", "draft"].includes(request.mode)) throw new Error("analytical/drafting only");
  if (request.external_effect !== false) throw new Error("external effects forbidden");
  return Object.freeze({ eligible: true, capability: "marketing.strategy", execution_authorized: false });
}
