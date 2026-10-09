# woia-marketing-strategy

WOIA Marketing v0.5.6 provider for `marketing.strategy`.

- Primary skill: `$marketing-strategy`
- Authoring profile: thin
- Origin: WOIA-native

Capability-owned tools/templates live in this plugin. Generic certification/release tooling lives in `woia-ecosystem`.

Marketing and Ads are eligible analytical consumers. Paid-strategy planning confers no paid execution, publication or person-contact permission. See the [consumer contract](skills/marketing-strategy/references/consumer-contract.md).

This compatible extension preserves the original skill workflow and strategy brief. No hard dependency or external adapter is added. Existing `v0.5.6` remains immutable. Run `pnpm test` and `pnpm run ci:fast`; certify the clean candidate with Ecosystem v0.5.6 `mise run plugin:certify-thin --repo <path>`. This native thin provider has no dependencies, installation, local bootstrap/doctor or release:check task; official thin certification owns manifest/skill/payload/archive validation. No optional checksum manifest is present.

## Maintenance

Edit only this canonical repository. Keep `plugin.json`, `package.json` and `dev.woia/manifest.json` versions aligned. From the canonical WOIA Ecosystem repository, run `mise run plugin:certify-thin --repo <absolute-plugin-repository>`, then use its release preparation/publication tasks. Install and update consumers from immutable published artifacts; keep Project personalization in overlays.
