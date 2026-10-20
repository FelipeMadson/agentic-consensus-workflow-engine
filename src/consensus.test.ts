import { test, describe } from 'node:test';
import * as assert from 'node:assert';
import { ConsensusEngine, AgentVote } from './consensus.js';

describe('Multi-Agent Consensus Engine Test Suite', () => {
  test('should approve when quorum and confidence exceed threshold', () => {
    const engine = new ConsensusEngine(0.66);
    engine.registerVote({
      agentId: 'agent-alpha',
      role: 'ARCHITECT',
      proposal: 'Adopt isolated clean architecture with strict domain boundaries',
      confidenceScore: 0.95,
      vote: 'APPROVE'
    });
    engine.registerVote({
      agentId: 'agent-beta',
      role: 'SECURITY_REVIEWER',
      proposal: 'Enforce constant-time comparison for all HMAC validations',
      confidenceScore: 0.90,
      vote: 'APPROVE'
    });
    engine.registerVote({
      agentId: 'agent-gamma',
      role: 'PERFORMANCE_ENGINEER',
      proposal: 'Verify zero allocation hot path',
      confidenceScore: 0.85,
      vote: 'APPROVE'
    });

    const result = engine.evaluateConsensus();
    assert.strictEqual(result.accepted, true);
    assert.strictEqual(result.finalDecision, 'APPROVED');
    assert.strictEqual(result.participatingAgents, 3);
  });

  test('should reject when quorum fails', () => {
    const engine = new ConsensusEngine(0.66);
    engine.registerVote({
      agentId: 'agent-alpha',
      role: 'ARCHITECT',
      proposal: 'Deploy without automated tests',
      confidenceScore: 0.40,
      vote: 'REJECT'
    });
    engine.registerVote({
      agentId: 'agent-beta',
      role: 'SECURITY_REVIEWER',
      proposal: 'Reject unverified change',
      confidenceScore: 0.95,
      vote: 'REJECT'
    });

    const result = engine.evaluateConsensus();
    assert.strictEqual(result.accepted, false);
    assert.strictEqual(result.finalDecision, 'REJECTED');
  });
});
