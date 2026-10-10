# woia-marketing-strategy

WOIA Marketing v0.5.8 provider for `marketing.strategy`.

- Primary skill: `$marketing-strategy`
- Authoring profile: thin
- Origin: WOIA-native

Capability-owned tools/templates live in this plugin. Generic certification/release tooling lives in `woia-ecosystem`.

Marketing and Ads are eligible analytical consumers. Paid-strategy planning confers no paid execution, publication or person-contact permission. See the [consumer contract](skills/marketing-strategy/references/consumer-contract.md).

The provider preserves the generic strategy workflow and brief. No hard dependency or external adapter is added. Existing `v0.5.7` remains immutable. Certify the clean committed candidate from canonical Ecosystem with `mise run plugin:certify-thin --repo <absolute-plugin-repository>`. This native thin provider has no local bootstrap, doctor, test or release-check task; central certification owns manifest, skill, payload, discovered regression and archive validation. No optional checksum manifest is present.

## Maintenance

Edit only this canonical repository. Keep `plugin.json`, `package.json` and `dev.woia/manifest.json` versions aligned. From the canonical WOIA Ecosystem repository, run `mise run plugin:certify-thin --repo <absolute-plugin-repository>`, then use its release preparation/publication tasks. Install and update consumers from immutable published artifacts; keep Project personalization in overlays.
