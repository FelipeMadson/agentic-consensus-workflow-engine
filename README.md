# Agentic Consensus Workflow Engine

[![CI](https://github.com/FelipeMadson/agentic-consensus-workflow-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/agentic-consensus-workflow-engine/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-green.svg)](https://github.com/FelipeMadson/agentic-consensus-workflow-engine/releases)

Deterministic multi-agent consensus and tool-calling workflow engine authored by [Felipe Madison](https://github.com/FelipeMadson). Features Byzantine-resistant quorum voting, confidence-weighted consensus thresholds, and Zod runtime schema contracts.

## Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        AGENTIC REASONING COUNCIL                       │
│   • Architect Persona (Domain Integrity & Clean Decoupling)           │
│   • Security Reviewer (Constant-Time Crypto & Vulnerability Audits)   │
│   • Performance Engineer (Zero-Allocation Hot Paths & Latency)       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        CONSENSUS ENGINE & QUORUM                       │
│   • Zod Schema Contract Validation                                     │
│   • Weighted Quorum (66%+ Threshold) & Confidence Evaluation           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        DETERMINISTIC DECISION                          │
│   • Approved State / Fast-Fail Rejection                               │
│   • Zero Non-Deterministic Hallucinations                              │
└────────────────────────────────────────────────────────────────────────┘
```

## Build & Test

```bash
npm install
npm run build
npm test
```

## Author

Authored by **[Felipe Madison](https://github.com/FelipeMadson)**.
