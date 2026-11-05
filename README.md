# skku-rice.github.io

Website of SKKU–Rice collaboration events, served by GitHub Pages at https://skku-rice.github.io/

| Path | Content |
|---|---|
| `index.html` | Hub page listing all events (edit by hand) |
| `202612_workshop/` | Rice–SKKU Quantum Collaboration Workshop, Dec 3–4, 2026 (generated, do not edit here) |

The workshop folder is generated from the source in `~/1_proj/exchange_site` (`python3 build.py`) and copied here by `tools/deploy_github.sh` in that folder.

To add a new event: build it into a new folder named `YYYYMM_<name>/` and add a card to `index.html`.
