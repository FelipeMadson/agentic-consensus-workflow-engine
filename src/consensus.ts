import { z } from 'zod';

export const AgentVoteSchema = z.object({
  agentId: z.string().min(1),
  role: z.enum(['ARCHITECT', 'SECURITY_REVIEWER', 'PERFORMANCE_ENGINEER']),
  proposal: z.string().min(5),
  confidenceScore: z.number().min(0).max(1),
  vote: z.enum(['APPROVE', 'REJECT', 'NEEDS_REVISION'])
});

export type AgentVote = z.infer<typeof AgentVoteSchema>;

export interface ConsensusResult {
  accepted: boolean;
  quorumRatio: number;
  averageConfidence: number;
  finalDecision: 'APPROVED' | 'REJECTED' | 'QUORUM_NOT_MET';
  participatingAgents: number;
}

export class ConsensusEngine {
  private readonly votes: AgentVote[] = [];

  constructor(private readonly requiredQuorum: number = 0.66) {}

  registerVote(vote: AgentVote): void {
    AgentVoteSchema.parse(vote);
    this.votes.push(vote);
  }

  evaluateConsensus(): ConsensusResult {
    if (this.votes.length === 0) {
      return {
        accepted: false,
        quorumRatio: 0,
        averageConfidence: 0,
        finalDecision: 'QUORUM_NOT_MET',
        participatingAgents: 0
      };
    }

    const approves = this.votes.filter(v => v.vote === 'APPROVE').length;
    const quorumRatio = approves / this.votes.length;
    const avgConfidence = this.votes.reduce((acc, v) => acc + v.confidenceScore, 0) / this.votes.length;

    const accepted = quorumRatio >= this.requiredQuorum && avgConfidence >= 0.7;

    return {
      accepted,
      quorumRatio: Math.round(quorumRatio * 100) / 100,
      averageConfidence: Math.round(avgConfidence * 100) / 100,
      finalDecision: accepted ? 'APPROVED' : 'REJECTED',
      participatingAgents: this.votes.length
    };
  }
}
